import React, {Component} from 'react';
import {connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../Actions';
//import { requestRobots } from '../Reducers';

import './App.css';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount()
  {
    this.props.onRequestRobots();
  }

  render() {

    const foundRobots = this.props.robots.filter( robot => {
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
