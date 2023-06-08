import React, { useState, useEffect, useContext } from 'react';
import useInput from './useInput';
import { ActionTypeEnum, ToDoContext } from '../TodoProvider';
import { ITask } from '../Homepage';

const TaskForm = () => {
  const { dispatch, activeTasks } = useContext(ToDoContext);
  const title = useInput('');
  const description = useInput('');
  const [isTaskAdded, setIsTaskAdded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (activeTasks.length >= 5) {
      setErrorMessage('You have already added 5 tasks.');
      return;
    }

    const data: ITask = {
      id: '',
      title: title.value,
      description: description.value,
      isFav: false,
    };
    dispatch({ type: ActionTypeEnum.Add, data });
    setIsTaskAdded(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTaskAdded || errorMessage) {
      timer = setTimeout(() => {
        setIsTaskAdded(false);
        setErrorMessage('');
      }, 1500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isTaskAdded, errorMessage]);

  const successMessageStyle = {
    fontSize: '18px',
    color: 'green',
    margin: '10px 0',
    fontWeight: 'bold',
  };

  const errorMessageStyle = {
    fontSize: '18px',
    color: 'red',
    margin: '10px 0',
    fontWeight: 'bold',
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div
        style={{
          marginBottom: '20px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #EAEAEA 100%)',
          border: '1px solid #CCCCCC',
          borderRadius: '5px',
          transform: 'translateY(2px)',
          marginTop: '30px',
        }}
      >
        <form onSubmit={onFormSubmit}>
          <label
            style={{ fontSize: '18px', padding: '10px', fontFamily: 'cursive' }}
          >
            Title
          </label>
          <input
            type="text"
            required
            {...title}
            style={{
              fontSize: '16px',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
            }}
          />
          <div
            style={{
              marginBottom: '20px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #EAEAEA 100%)',
              border: '1px solid #CCCCCC',
              borderRadius: '5px',
              transform: 'translateY(2px)',
            }}
          >
            <label
              style={{
                fontSize: '18px',
                padding: '10px',
                fontFamily: 'cursive',
              }}
            >
              Description
            </label>
            <textarea
              rows={3}
              {...description}
              style={{
                fontSize: '16px',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
              }}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              style={{
                fontSize: '18px',
                padding: '10px 20px',
                borderRadius: '5px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #EAEAEA 100%)',
                border: '1px solid #CCCCCC',
                transform: 'translateY(2px)',
                fontFamily: 'cursive',
                fontWeight: 'bold',
              }}
            >
              Add Task
            </button>
          </div>
          {isTaskAdded && (
            <div style={successMessageStyle}>Success: Task added!</div>
          )}
          {errorMessage && <div style={errorMessageStyle}>{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
