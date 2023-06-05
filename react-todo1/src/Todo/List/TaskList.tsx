import React from 'react';
import { TaskListStyle } from "./TaskList.style";

interface ITask {
  id: string;
  title: string;
}

const TaskList = () => {
  const tasks: ITask[] = [
    {
      id: "1",
      title: "Lorem ipsums jsjsjshjdadadad"
    },
    {
      id: "2",
      title: "Lorem ipsumadjhadkhadvjga"
    },
  ];

  const onRenderCell = (task: ITask) => {
    return (
      <div key={task.id} className={TaskListStyle.task}>
        <input type="checkbox" style={{ width: '20px', height: '20px' }} />
        {task.title}
      </div>
    );
  };

  return (
    <div>
      {tasks.map(onRenderCell)}
    </div>
  );
};

export default TaskList;
