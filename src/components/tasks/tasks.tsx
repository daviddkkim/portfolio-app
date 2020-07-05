
// src/components/Task.js
import React from 'react';
import PropTypes from 'prop-types';


export default function Task( task: {id:string, title:string, state:string}, onArchiveTask:Function, onPinTask:Function) {
  return (
    <div className="list-item">
        <label>
        <input
            type="checkbox"
            defaultChecked={task.state==='TASK_ARCHIVED'}
            disabled={false}
            name="checked"
        />
        <span  onClick={() => onArchiveTask(task.id)} />
        </label>
      <input type="text" value={task.title} readOnly={true} placeholder = "Input Title"/>
      <div onClick={event => event.stopPropagation()}>
          {task.state !== 'TASK_ARCHIVED' && (
              <a onClick = {() => onPinTask(task.id)}>
                  <span> dsadas</span>
              </a>
          )}
      </div>
    </div>
  );
  
}

Task.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
};