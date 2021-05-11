import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBx} from './components/search-box/searchBox.components.jsx';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((JsonResponse) => this.setState({ monster: JsonResponse }));
  }
  handleChange=(e)=>{
    this.setState({searchField:e.target.value});
  }
  render() {
    const { monster, searchField } = this.state;
    const flitterMonster = monster.filter(
      (monster) => monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="h1">Monster</h1>
        <SearchBx
          placeholder = "search hear"
          EventHandler={this.handleChange}
        />
        <CardList mon={flitterMonster}></CardList>
      </div>
    );
  }
}
export default App;
