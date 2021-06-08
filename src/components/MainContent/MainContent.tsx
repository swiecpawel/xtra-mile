import React from "react";
import style from "./MainContent.module.css";
import Header from "./Header/Header";
import Body from "./Body/Body";

const MainContent: React.FC = () => (
  <div className={style.Content}>
    <Header />
    <Body />
  </div>
);
export default MainContent;