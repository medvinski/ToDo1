import React, { useState, useEffect, useContext } from 'react';
import useInput from './useInput';
import { ActionTypeEnum, ToDoContext } from '../TodoProvider';
import { ITask } from '../Homepage';

type Props = {
  editTaskId: string | null;
};
const TaskForm = ({ editTaskId }: Props) => {
  const { dispatch, activeTasks } = useContext(ToDoContext);

  useEffect(() => {
    if (editTaskId) {
      const taskData = activeTasks.find((task) => task.id === editTaskId);
      title.set(taskData?.title || '');
      description.set(taskData?.description || '');
    } else {
      title.set('');
      description.set('');
    }
  }, [editTaskId]);

  const title = useInput('');
  const description = useInput('');
  const [isTaskAdded, setIsTaskAdded] = useState(false);
  const [isTaskEdited, setIsTaskEdited] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const addTaskAction = () => {
    const data: ITask = {
      id: '',
      title: title.value,
      description: description.value,
      isFav: false,
    };
    dispatch({ type: ActionTypeEnum.Add, data });
    setIsTaskAdded(true);
    title.set('');
    description.set('');
  };

  const updateTaskAction = () => {
    const taskData = activeTasks.find((task) => task.id === editTaskId);
    if (taskData) {
      const data: ITask = {
        id: taskData.id,
        title: title.value,
        description: description.value,
        isFav: taskData.isFav,
      };
      dispatch({ type: ActionTypeEnum.Update, data });
      setIsTaskEdited(true);
    }
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    editTaskId ? updateTaskAction() : addTaskAction();
    if (activeTasks.length >= 5) {
      setErrorMessage('You have already added 5 tasks.');
      return;
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTaskAdded) {
      timer = setTimeout(() => {
        setIsTaskAdded(false);
      }, 1500);
    } else if (isTaskEdited) {
      timer = setTimeout(() => {
        setIsTaskEdited(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isTaskAdded, isTaskEdited]);

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
          {/* Title input */}
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

          {/* Description input */}
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

          {/* Submit button */}
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
              {editTaskId ? 'Update Task' : 'Add Task'}
            </button>
          </div>

          {/* Success and error messages */}
          {isTaskAdded && <div style={successMessageStyle}>Task added!</div>}
          {isTaskEdited && <div style={successMessageStyle}>Task edited!</div>}
          {errorMessage && <div style={errorMessageStyle}>{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
