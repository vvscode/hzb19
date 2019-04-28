import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { loadItems } from '../../redux/actions';

import AddTaskFrom from '../AddTaskForm';
import TasksList from '../TasksList';
import FilterTasksForm from '../FilterTasksForm/index';

class App extends Component {
  componentDidMount = () => this.props.loadItems();

  render() {
    return (
      <div className="App">
        <AddTaskFrom />
        <FilterTasksForm />
        <TasksList />
      </div>
    );
  }
}

export default connect(undefined, { loadItems })(App);
