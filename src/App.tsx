import React from "react";
import style from "./App.module.css";
import MainContent from "./components/MainContent/MainContent";

const App: React.FC = () => {
  return (
    <div className={style.App}>
      <MainContent />
    </div>
  );
};

export default App;
