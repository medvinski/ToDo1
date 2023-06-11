import React, { Dispatch, createContext, useReducer } from 'react';
import { ITask } from './Homepage';
import { clone } from './utility';

interface ITodoContext {
  activeTasks: ITask[];
  dispatch: Dispatch<any>;
}

interface ITodoState {
  activeTasks: ITask[];
}

export const ToDoContext = createContext<ITodoContext>({
  activeTasks: [],
  dispatch: () => {},
});

export enum ActionTypeEnum {
  Add,
  Delete,
  ToggleFav,
  Update,
}

type IReducerAction =
  | IAddAction
  | IDeleteAction
  | IToggleFavAction
  | IUpdateAction;

interface IAddAction {
  type: ActionTypeEnum.Add;
  data: ITask;
}

interface IDeleteAction {
  type: ActionTypeEnum.Delete;
  data: { id: string };
}

interface IToggleFavAction {
  type: ActionTypeEnum.ToggleFav;
  data: { id: string };
}

interface IUpdateAction {
  type: ActionTypeEnum.Update;
  data: ITask;
}

type Props = {
  children: React.ReactNode;
};

const addTaskAction = (state: ITodoState, action: IAddAction) => {
  const { data } = action;
  data.id = new Date().toJSON();
  return [action.data, ...state.activeTasks];
};

const deleteTaskAction = (state: ITodoState, action: IDeleteAction) => {
  const activeTasks: ITask[] = clone(state.activeTasks);
  const filteredData = activeTasks.filter((task) => task.id !== action.data.id);
  return filteredData;
};

const toggleFavAction = (state: ITodoState, action: IToggleFavAction) => {
  const cloneActiveTasks: ITask[] = clone(state.activeTasks);
  const index = cloneActiveTasks.findIndex((x) => x.id === action.data.id);
  if (index >= 0) {
    cloneActiveTasks[index].isFav = !cloneActiveTasks[index].isFav;
  }
  return cloneActiveTasks;
};
const updateTaskAction = (state: ITodoState, action: IUpdateAction) => {
  const cloneActiveTasks: ITask[] = clone(state.activeTasks);
  const index = cloneActiveTasks.findIndex((x) => x.id === action.data.id);
  if (index >= 0) {
    cloneActiveTasks[index] = action.data;
  }
  return cloneActiveTasks;
};
const reducer = (state: ITodoState, action: IReducerAction) => {
  switch (action.type) {
    case ActionTypeEnum.Add:
      return { ...state, activeTasks: addTaskAction(state, action) };

    case ActionTypeEnum.Delete:
      return { ...state, activeTasks: deleteTaskAction(state, action) };

    case ActionTypeEnum.ToggleFav:
      return { ...state, activeTasks: toggleFavAction(state, action) };

    case ActionTypeEnum.Update:
      return { ...state, activeTasks: updateTaskAction(state, action) };
  }

  return { ...state };
};

const TodoProvider = (props: Props) => {
  const tasks: ITask[] = [];

  const data = { activeTasks: tasks };
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <ToDoContext.Provider value={{ activeTasks: state.activeTasks, dispatch }}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export default TodoProvider;
