import { IProcessedStyleSet, IStyle, mergeStyleSets } from '@fluentui/react';

interface ITaskListStyle {
  task: IStyle;
  icon: IStyle;
  iconsContainer: IStyle;
  favoriteIcon: IStyle;
  disabled: IStyle;
  tooltip: IStyle; // New style for the custom tooltip
  tooltipContent: IStyle; // Style for the tooltip content
  tooltipText: IStyle; // Style for the tooltip text
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
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    outline: 'none',
  },
  favoriteIcon: {
    color: 'red',
    cursor: 'pointer',
  },
  disabled: {
    color: 'lightgray',
    selectors: {
      '&:hover': { cursor: 'default' },
    },
  },
  tooltip: {
    position: 'absolute',
    top: '0',
    left: '100%',
    width: '200px',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    zIndex: 9999,
  },
  tooltipContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  tooltipText: {
    lineHeight: '1.4',
  },
});

export default TaskListStyle;
