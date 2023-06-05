import React, { useContext } from 'react';
import { TaskListStyle } from "./TaskList.style";
import { FontIcon } from '@fluentui/react';
import { ToDoContext } from '../Homepage';
import {ITask} from "../Homepage"




const TaskList = () => {
  

  const { activeTasks } = useContext(ToDoContext)

  const onRenderCell = (task: ITask) => {
    return (
      <div key={task.id} className={TaskListStyle.task}>
        <input type="checkbox" style={{ width: '20px', height: '20px' }} />
        {task.title}
        <FontIcon  iconName="Info" className={TaskListStyle.icon} />
        <FontIcon  iconName={task.isFav ? "FavoriteStarFill" : "FavoriteStar"} className={TaskListStyle.icon} />
        <FontIcon  iconName="EditNote" className={TaskListStyle.icon} />
        <FontIcon  iconName="Delete" className={TaskListStyle.icon} />
      </div>
    );
  };

  return (
    <div>
      {activeTasks.map(onRenderCell)}
    </div>
  );
};

export default TaskList;
