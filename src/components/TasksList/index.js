import React from 'react';
import { updateTask } from '../../redux/actions';
import { connect } from 'react-redux';
import './styles.css';
import { PRIORITIES } from '../../config';


class TasksList extends React.Component {
  render() {
    const {
      items
    } = this.props;
    return <div>
      <table>
        <caption>{items.length ? `${items.length} item(s)` : 'Noting'} in list</caption>
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {items.map(el => <tr key={el.id}>
            <td>
              {el.title}
            </td>
            <td>{PRIORITIES[el.priority]}</td>
            <td>
              <input type="checkbox" checked={el.done} readOnly onClick={() => this.props.updateTask(el.id, { done: !el.done })} />
            </td>
          </tr>)}
        </tbody>
      </table>

    </div>
  }
}

export default connect(
  (state) => ({
    items: state.items
      .filter(el => !state.filter ? true : el.title.toLowerCase().includes(state.filter.toLowerCase()))
      .filter((el) => state.showCompleted ? true : !el.done),
  }),
  {
    updateTask
  }
)(TasksList);