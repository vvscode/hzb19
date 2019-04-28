import React from 'react';
import { setFilter, showCompleted as setShowCompleted } from '../../redux/actions';
import { connect } from 'react-redux';
import './styles.css';


class FilterTasksForm extends React.Component {
  onChangeFilter = (ev) => this.props.setFilter(ev.target.value);
  onChangeShowCompleted = () => this.props.setShowCompleted(!this.props.showCompleted);

  render() {
    return <div className="wrapper">
      <label className="label">Filter tasks: <input value={this.props.value} onChange={this.onChangeFilter} className="input" placeholder="Search task" /></label>
      <label className="label">Show completed: <input onClick={this.onChangeShowCompleted} checked={this.props.showCompleted} readOnly type="checkbox" className="input" /></label>
    </div>
  }
}

export default connect(
  (state) => ({
    value: state.filter,
    showCompleted: state.showCompleted,
  }),
  { setFilter, setShowCompleted },
)(FilterTasksForm);