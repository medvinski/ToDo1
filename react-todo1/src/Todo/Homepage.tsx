import React, { useState, useEffect, createContext } from 'react';
import { HomepageStyle } from './Homepage.style';
import TodoString from './string.json';
import TaskList from './List/TaskList';
import axios from 'axios';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import TodoProvider from './TodoProvider';
import TaskForm from './AddTask/TaskForm';
initializeIcons();

interface PivotItem {
  headerText: string;
  itemKey: string;
  content: React.ReactNode;
}
export interface ITask {
  id: string;
  title: string;
  description?: string;
  isFav: boolean;
}
interface Joke {
  setup: string;
  punchline: string;
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
      Current time : {currentTime.toLocaleTimeString('pl-PL')}
    </div>
  );
};

const Homepage = () => {
  const [editTaskId, setEditTaskId] = useState<string | null>(null);
  const editTask = (id: string) => {
    setEditTaskId(id);
    setSelectedKey('1');
  };
  const pivotItems: PivotItem[] = [
    {
      headerText: 'My Tasks',
      itemKey: '0',
      content: <TaskList setEditTask={editTask} />,
    },
    {
      headerText: 'Add',
      itemKey: '1',
      content: <TaskForm editTaskId={editTaskId} />,
    },
    {
      headerText: 'Completed',
      itemKey: '2',
      content: <label></label>,
    },
  ];

  const [selectedKey, setSelectedKey] = useState('0');

  const [advice, setAdvice] = useState<string | null>(null);
  const [joke, setJoke] = useState<string | null>(null);

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
  const fetchJoke = async (): Promise<void> => {
    try {
      const response = await axios.get(
        'https://official-joke-api.appspot.com/random_joke'
      );
      const jokeData: Joke = response.data;
      const formattedJoke: string = `${jokeData.setup} ${jokeData.punchline}`;
      setJoke(formattedJoke);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  const handleFetchJoke = () => {
    fetchJoke();
  };
  const handleFetchAdvice = () => {
    fetchAdvice();
  };

  useEffect(() => {
    fetchAdvice();
    fetchJoke();
  }, []);

  return (
    <div className={HomepageStyle.todoContainer}>
      <TodoProvider>
        <header className={HomepageStyle.headerStyle}>
          <h2>{TodoString.header}</h2>
        </header>

        <Clock />
        <ul className={HomepageStyle.tabContainer}>
          {pivotItems.map((item) => (
            <li
              key={item.itemKey}
              className={`${HomepageStyle.tab} ${
                selectedKey === item.itemKey ? HomepageStyle.activeTab : ''
              }`}
              onClick={() => handleTabClick(item.itemKey)}
            >
              {item.headerText}
            </li>
          ))}
        </ul>

        <div className="pivot-content">
          {pivotItems.map(
            (item) =>
              selectedKey === item.itemKey && (
                <div key={item.itemKey}>{item.content}</div>
              )
          )}
        </div>
        {advice && (
          <div className={HomepageStyle.adviceContainer}>
            <h1 className={HomepageStyle.adviceStyle}>
              <span>Advice:</span> {advice}
            </h1>
            <button onClick={handleFetchAdvice}>New Advice</button>
          </div>
        )}
        {joke && (
          <div className={HomepageStyle.jokeContainer}>
            <h1 className={HomepageStyle.jokeStyle}>
              <span>Joke:</span> {joke}
            </h1>
            <button onClick={handleFetchJoke}>New Joke</button>
          </div>
        )}
      </TodoProvider>
    </div>
  );
};

export default Homepage;
