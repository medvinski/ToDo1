import React, { createContext } from 'react';
import { ITask } from './Homepage';
export const ToDoContext = createContext<{activeTasks :ITask[]}>({activeTasks :[]});

type Props ={
  children : React.ReactNode
}

const TodoProvider = (props:Props) => {
  const tasks: ITask[] = [
    {
      id: "1",
      title: "Lorem ipsums jdad",
      isFav: true
    },
    {
      id: "2",
      title: "Lorem ipsumadjhadkhadvjga",
      isFav: false
    },
    {
      id: "3",
      title: "third",
      isFav: false
    },
  ];
  
  return (
  <ToDoContext.Provider value={{activeTasks : tasks}}>
{props.children}
  </ToDoContext.Provider> 
  );
};

export default TodoProvider;