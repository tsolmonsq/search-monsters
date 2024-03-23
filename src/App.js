import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list';
import { SearchBox } from './components/search-box';


export default class App extends Component{
  constructor(){
    super();
    this.state = {
      users: [],
      searchField: ""
    }
  }

  onSearchChanged = event =>{
    this.setState({searchField: event.target.value});
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({users: data}));
  }

  render(){
    const {users, searchField} = this.state;

    const filteredUsers = users.filter(el => el.name.toLowerCase().includes(searchField));
    return(
      <div className='App'>
        <h1>Monsters</h1>
        <SearchBox onSearch={this.onSearchChanged}/>
        <CardList users={filteredUsers}/>
      </div>
    );
  }
}
