import React from "react";
import "./App.css";
import FilterContainer from "./Filter/FilterContainer";
import UsersContainer from "./Users/UsersContainer";

const App = () => {
  return (
    <div className='content'>
      <FilterContainer/>
      <UsersContainer/>
    </div>

  )
};
export default App;
