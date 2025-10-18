import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header";
import Main from "./components/main";
import Counter from "./components/counter";
import Contact from "./components/contact";
import UserHeader from "./components/userheader";
import UserBody from "./components/userbody";

import tabsData from "./data/pads";

import Tab from "./components/tab";

import "./App.css";

function App({ darkMode }) {
  // console.log("App Rendered");

  // const [tabs, setTabs] = React.useState(tabsData);

  // // function toggle(id) {
  // //   setTabs(prevtabs =>
  // //     prevtabs.map(tab => (
  // //       (tab.id === id ? { ...tab, on: !tab.on } : tab)
  // //     )))

  // // }
  // function toggle() {
  //   setTabs((prevtabs) =>
  //     prevtabs.map((tab) => ({ ...tab, on: !tab.on} ))
  //   );
  // }

  // const buttons = tabs.map((element) => (
  //   <Tab
  //     key={element.id}
  //     text={element.color}
  //     on={element.on}
  //     color={element.color}
  //     byClick={toggle}
  //     id={element.id}
  //   ></Tab>
  // ));

  return (
    <>
      <Header />
      <Main />
      {/* <div className="tabs-container"> {buttons}</div> */}
    </>
  );
}

export default App;
