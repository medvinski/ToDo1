import React, { useState, useRef } from 'react';
import { FontIcon } from '@fluentui/react';

import TaskListStyle from './TaskList.style';
import { ITask } from '../Homepage';

type Prop = {
  task: ITask;
};

const TaskDescription: React.FC<Prop> = ({ task }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleTooltipVisible = () => {
    setTooltipVisible(!tooltipVisible);
  };

  const onButtonClick = () => {
    toggleTooltipVisible();
  };

  const onTooltipDismiss = () => {
    setTooltipVisible(false);
  };

  return (
    <>
      <button
        ref={buttonRef}
        className={
          task.description
            ? TaskListStyle.icon
            : `${TaskListStyle.icon} ${TaskListStyle.disabled}`
        }
        onClick={onButtonClick}
      >
        {task.description ? (
          <FontIcon iconName="Info" />
        ) : (
          <FontIcon iconName="Info" style={{ color: 'lightgray' }} />
        )}
      </button>
      {tooltipVisible && task.description && (
        <div
          className={TaskListStyle.tooltip}
          style={{ top: buttonRef.current?.offsetTop || 0 }}
        >
          <div className={TaskListStyle.tooltipContent}>
            <div className={TaskListStyle.tooltipText}>{task.description}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskDescription;
