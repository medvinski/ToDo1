import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface ITaskListStyle{
  task: IStyle
}
export const TaskListStyle : IProcessedStyleSet <ITaskListStyle> = mergeStyleSets({

  task: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    margin: '5px',
    background: 'transparent',
    borderRadius: '5px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',
    transformStyle: 'preserve-3d',
    color: 'black',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    border: '2px solid black',
    fontFamily: 'cursive',
    fontSize: '30px' 
  },
    

});

export default TaskListStyle;