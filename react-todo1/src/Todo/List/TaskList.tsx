import React, { useContext } from 'react';
import { TaskListStyle } from './TaskList.style';
import { FontIcon } from '@fluentui/react';
import { ITask } from '../Homepage';
import { ActionTypeEnum, ToDoContext } from '../TodoProvider';

const TaskList = () => {
  const { activeTasks, dispatch } = useContext(ToDoContext);
  const onTaskDelete = (id: string) => {
    dispatch({ type: ActionTypeEnum.Delete, data: { id } });
  };
  const onRenderCell = (task: ITask) => {
    return (
      <div key={task.id} className={TaskListStyle.task}>
        <input type="checkbox" style={{ width: '20px', height: '20px' }} />
        {task.title}
        <div className={TaskListStyle.iconsContainer}>
          <FontIcon iconName="Info" className={TaskListStyle.icon} />
          <FontIcon
            iconName={task.isFav ? 'FavoriteStarFill' : 'FavoriteStar'}
            className={TaskListStyle.icon}
          />
          <FontIcon iconName="EditNote" className={TaskListStyle.icon} />
          <FontIcon
            iconName="Delete"
            className={TaskListStyle.icon}
            onClick={() => {
              onTaskDelete(task.id);
            }}
          />
        </div>
      </div>
    );
  };
  return <div>{activeTasks.map(onRenderCell)}</div>;
};

export default TaskList;
