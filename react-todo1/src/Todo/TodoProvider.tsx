import React, { Dispatch, createContext, useReducer } from 'react';
import { ITask } from './Homepage';
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
}

type IReducerAction = IAddAction | IDeleteAction;

interface IAddAction {
  type: ActionTypeEnum.Add;
  data: ITask;
}

interface IDeleteAction {
  type: ActionTypeEnum.Delete;
  data: { id: string };
}

type Props = {
  children: React.ReactNode;
};

const reducer = (state: ITodoState, action: IReducerAction) => {
  switch (action.type) {
    case ActionTypeEnum.Add:
      const { data } = action;
      data.id = new Date().toJSON();
      return { ...state, activeTasks: [action.data, ...state.activeTasks] };

    case ActionTypeEnum.Delete:
      const activeTasks: ITask[] = JSON.parse(
        JSON.stringify(state.activeTasks)
      );
      const filteredData = activeTasks.filter(
        (task) => task.id !== action.data.id
      );
      return { ...state, activeTasks: filteredData };
  }

  return { ...state };
};

const TodoProvider = (props: Props) => {
  const tasks: ITask[] = [
    {
      id: '1',
      title: 'Lorem ipsums jdad',
      isFav: true,
    },
    {
      id: '2',
      title: 'Lorem ipsumadjhadkhadvjga',
      isFav: false,
    },
    {
      id: '3',
      title: 'third',
      isFav: false,
    },
  ];

  const data = { activeTasks: tasks };
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <ToDoContext.Provider value={{ activeTasks: state.activeTasks, dispatch }}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export default TodoProvider;
