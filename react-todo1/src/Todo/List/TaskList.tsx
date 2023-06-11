import React, { useContext } from 'react';
import { TaskListStyle } from './TaskList.style';
import { FontIcon } from '@fluentui/react';
import { ITask } from '../Homepage';
import { ActionTypeEnum, ToDoContext } from '../TodoProvider';
import TaskDescription from './TaskDescription';

type Props = {
  setEditTask: (taskId: string) => void;
};

const TaskList = ({ setEditTask }: Props) => {
  const { activeTasks, dispatch } = useContext(ToDoContext);
  const onTaskDelete = (id: string) => {
    dispatch({ type: ActionTypeEnum.Delete, data: { id } });
  };
  const onFavClick = (id: string) => {
    dispatch({ type: ActionTypeEnum.ToggleFav, data: { id } });
  };
  const onRenderCell = (task: ITask) => {
    return (
      <div key={task.id} className={TaskListStyle.task}>
        <input type="checkbox" style={{ width: '20px', height: '20px' }} />
        {task.title}
        <div className={TaskListStyle.iconsContainer}>
          <TaskDescription task={task} />
          <FontIcon
            iconName={task.isFav ? 'FavoriteStarFill' : 'FavoriteStar'}
            className={`${TaskListStyle.icon} ${
              task.isFav ? TaskListStyle.favoriteIcon : ''
            }`}
            onClick={() => onFavClick(task.id)}
          />
          <FontIcon
            iconName="EditNote"
            className={TaskListStyle.icon}
            onClick={() => {
              setEditTask(task.id);
            }}
          />
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
