import { IProcessedStyleSet, IStyle, mergeStyleSets } from '@fluentui/react';

interface ITaskListStyle {
  task: IStyle;
  icon: IStyle;
  iconsContainer: IStyle;
  favoriteIcon: IStyle; 
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
    justifyContent: 'flex-end', 
  },
  icon: {
    fontSize: 30,
    margin: '5px 5px 5px 5px', 
    width: '30px', 
  },
  favoriteIcon: {
    color: 'red', 
  },
});

export default TaskListStyle;
