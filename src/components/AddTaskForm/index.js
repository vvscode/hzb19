import React from 'react';
import { addTask } from '../../redux/actions';
import { connect } from 'react-redux';
import './styles.css';
import config from '../../config';

const DEFAULT_STATE = {
  title: '',
  priority: 3,
};

class AddTaskForm extends React.Component {
  state = DEFAULT_STATE;

  onSubmit = ev => {
    ev.preventDefault();
    this.props.onSubmit && this.props.onSubmit(this.state);
    this.setState(state => ({
      ...DEFAULT_STATE,
      priority: state.priority
    }));
  };

  onInputChange = name => ev =>
    this.setState({
      [name]: ev.target.value,
    });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <legend>Add new task:</legend>
        <div role="group" className="wrapper">
          <label className="label">
            Title:<br />
            <input
              type="text"
              placeholder="Enter task title"
              value={this.state.title}
              onChange={this.onInputChange('title')}
              autoFocus
              required
              className="input"
            />
          </label>
          <label className="label">
            Priority:
            <select value={this.state.priority} onChange={this.onInputChange('priority')} required className="input">
              <option value="" disabled>
                Select task priority
              </option>
              {Object.keys(config.PRIORITIES).map(value => (
                <option value={value} key={value}>
                  {config.PRIORITIES[value]}
                </option>
              ))}
            </select>
          </label>
          <button>Add</button>
        </div>
      </form>
    );
  }
}

export default connect(
  undefined,
  { onSubmit: addTask },
)(AddTaskForm);
