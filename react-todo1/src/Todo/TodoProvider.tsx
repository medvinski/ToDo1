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

type Props = {
  children: React.ReactNode;
};

const reducer = (state: ITodoState, action: any) => {
  console.log(state);
  console.log(action);
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
