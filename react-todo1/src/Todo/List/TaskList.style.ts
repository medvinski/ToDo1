import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface ITaskListStyle{
  task: IStyle;
  icon: IStyle;
  iconsContainer: IStyle
}
export const TaskListStyle: IProcessedStyleSet<ITaskListStyle> = mergeStyleSets({
  task: {
    display: 'flex',
    alignItems: 'center',
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
  text: {
    flex: 1,
    textAlign: 'center',
  },
  iconsContainer: {
    display: 'flex',
    marginLeft: '30px',
    justifyContent: 'flex-end', // Align icons at the end
  },
  icon: {
    fontSize: 30,
    margin: '5px 5px 5px 5px', // Adjust margin to set equal spacing between icons
    width: '30px', // Set a fixed width for the icons
    
  },
});




export default TaskListStyle;