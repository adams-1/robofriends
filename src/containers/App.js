import React, {Component} from 'react';
import {connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';
import { setSearchField } from '../Actions';

import './App.css';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
    }
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState( { robots: users } ));
  }

  render() {

    const foundRobots = this.state.robots.filter( robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })

    return (
      <div className = 'tc'>
        <h1 className = 'f1'>RoboFriend</h1>
        <SearchBox searchChange = { this.props.onSearchChange } />
        <Scroll>
          <ErrorBoundary>
            <CardList robots = {foundRobots} />
          </ErrorBoundary>
        </Scroll>
        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
