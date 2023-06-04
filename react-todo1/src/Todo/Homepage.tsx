import React, { useState } from "react";
import { HomepageStyle } from "./Homepage.style";
import TodoString from "./string.json";

interface PivotItem {
  headerText: string;
  itemKey: string;
  content: React.ReactNode;
}

const Homepage = () => {
  const pivotItems: PivotItem[] = [
    {
      headerText: "My Files",
      itemKey: "0",
      content: <label>Pivot #1</label>,
    },
    {
      headerText: "Recent",
      itemKey: "1",
      content: <label>Pivot #2</label>,
    },
    {
      headerText: "Shared with me",
      itemKey: "2",
      content: <label>Pivot #3</label>,
    },
  ];

  const [selectedKey, setSelectedKey] = useState("1");

  const handleTabClick = (itemKey: string) => {
    setSelectedKey(itemKey);
  };

  return (
    <div className={HomepageStyle.todoContainer}>
      <header className={HomepageStyle.headerStyle}>
        <h2>{TodoString.header}</h2>
      </header>

      <ul className={HomepageStyle.tabContainer}>
        {pivotItems.map((item) => (
          <li
            key={item.itemKey}
            className={`${HomepageStyle.tab} ${selectedKey === item.itemKey ? HomepageStyle.activeTab : ""}`}
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
    </div>
  );
};

export default Homepage;
