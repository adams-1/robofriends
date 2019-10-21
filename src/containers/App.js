import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState( { robots: users } ));
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render() {

    const foundRobots = this.state.robots.filter( robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    return (
      <div className = 'tc'>
        <h1 className = 'f1'>RoboFriend</h1>
        <SearchBox searchChange = { this.onSearchChange } />
        <Scroll>
          <ErrorBoundary>
            <CardList robots = {foundRobots} />
          </ErrorBoundary>
        </Scroll>
        
      </div>
    );
  }
}

export default App;
