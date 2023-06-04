import React from "react";
import { HomepageStyle } from "./Homepage.style";
import TodoString from "./string.json";



const Homepage = () => {
  return (
    <div className={HomepageStyle.todoContainer}>
      <header className={HomepageStyle.headerStyle}>
        <h2>{TodoString.header}</h2>
      </header>
     
      
    </div>
  );
};

export default Homepage;
