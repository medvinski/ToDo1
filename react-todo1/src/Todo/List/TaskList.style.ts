import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface ITaskListStyle{
  task: IStyle;
  icon: IStyle
}
export const TaskListStyle : IProcessedStyleSet <ITaskListStyle> = mergeStyleSets({

  task: {
    display: 'flex',
    alignItems: 'center', // Change alignment to center
    justifyContent: 'space-between', // Add property to distribute space between elements
    padding: '5px',
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
    fontSize: '19px',
  },
  icon: {
    fontSize: 30,  
    margin: '2px 2px', // Adjust margin to set equal spacing between icons
    width: '30px', // Set a fixed width for the icons
    
  },
});


export default TaskListStyle;