import React from "react";

const Filter = (props) => {
  let sel = React.createRef();

  return <form action="" onSubmit={(e) => {
  e.preventDefault()}}>
    <select ref={sel}>
      <option value='all'>All</option>
      <option value='men'>Men</option>
      <option value='women'>Women</option>
    </select>
    <button onClick={() => {
      props.setUsersThunkCreator(sel.current.value);
    }}></button>
  </form>
}


export default Filter;