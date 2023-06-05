import React, { useState, useEffect, createContext } from "react";
import { HomepageStyle } from "./Homepage.style";
import TodoString from "./string.json";
import TaskList from "./List/TaskList";
import axios from "axios";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
export const ToDoContext = createContext<{activeTasks :ITask[]}>({activeTasks :[]});

interface PivotItem {
  headerText: string;
  itemKey: string;
  content: React.ReactNode;
}
export interface ITask {
  id: string;
  title: string;
  isFav: boolean;
}

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={HomepageStyle.clockStyle}>
      Current time in Poland: {currentTime.toLocaleTimeString("pl-PL")}
    </div>
  );
};

const Homepage = () => {
  const pivotItems: PivotItem[] = [
    {
      headerText: "My Tasks",
      itemKey: "0",
      content: <TaskList />,
    },
    {
      headerText: "Add",
      itemKey: "1",
      content: <label>Pivot #2</label>,
    },
    {
      headerText: "Completed",
      itemKey: "2",
      content: <label>Pivot #3</label>,
    },
  ];

  
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
  
  const [selectedKey, setSelectedKey] = useState("1");
  const [advice, setAdvice] = useState<string | null>(null);

  const handleTabClick = (itemKey: string) => {
    setSelectedKey(itemKey);
  };

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      const adviceData: string = response.data.slip.advice;
      setAdvice(adviceData);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className={HomepageStyle.todoContainer}>
      <ToDoContext.Provider value={{activeTasks : tasks}}>
      <header className={HomepageStyle.headerStyle}>
        <h2>{TodoString.header}</h2>
        
      </header>
      
      <Clock />
      <ul className={HomepageStyle.tabContainer}>
        {pivotItems.map((item) => (
          <li
            key={item.itemKey}
            className={`${HomepageStyle.tab} ${
              selectedKey === item.itemKey ? HomepageStyle.activeTab : ""
            }`}
            onClick={() => handleTabClick(item.itemKey)}
          >
            {item.headerText}
          </li>
        ))}
      </ul>

      <div className="pivot-content">
        {pivotItems.map(
          (item) => selectedKey === item.itemKey && <div key={item.itemKey}>{item.content}</div>
        )}
      </div>
      {advice && (
        <div className={HomepageStyle.adviceContainer}>
          <h1 className={HomepageStyle.adviceStyle}>{advice}</h1>
        </div>
      )}
      </ToDoContext.Provider>
    </div>
    
  );
};

export default Homepage;