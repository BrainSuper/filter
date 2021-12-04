import React from "react";

const Filter = (props) => {
  let sel = React.createRef();
  let sel1 = React.createRef();
  return <form action="" onSubmit={(e) => {
    e.preventDefault();
  }}>
    <select ref={sel}>
      <option value='all'>All</option>
      <option value='male'>Men</option>
      <option value='female'>Women</option>
    </select>
    <select ref={sel1} multiple>
      <option onClick={(e) => {
        props.addFilters(e.target.value);
      }} value='AU'>AU
      </option>
      <option onClick={(e) => {
        props.addFilters(e.target.value);
      }} value='BR'>BR
      </option>
      <option onClick={(e) => {
        props.addFilters(e.target.value);
      }} value='CA'>CA
      </option>
      <option onClick={(e) => {
        props.addFilters(e.target.value);
      }} value='CH'>CH
      </option>
      <option onClick={(e) => {
        props.addFilters(e.target.value);
      }} value='DE'>DE
      </option>
      <option onClick={(e) => {
        props.addFilters(e.target.value);
      }} value='DK'>DK
      </option>
      <option onClick={(e) => {
        props.addFilters(e.target.value);
      }} value='ES'>ES
      </option>
      <option onClick={(e) => {
        props.addFilters(e.target.value);
      }} value='FI'>FI
      </option>
      <option onClick={(e) => {
        props.addFilters(e.target.value);
      }} value='FR'>FR
      </option>
      <option onClick={(e) => {
        props.addFilters(e.target.value);
      }} value='GB'>GB
      </option>
      <option onClick={(e) => {
        props.addFilters(e.target.value);
      }} value='IE'>IE
      </option>
    </select>
    <button onClick={() => {
      console.log(sel.current.value);
      props.setUsersThunkCreator(sel.current.value, props.filters);
    }}></button>
  </form>;
};


export default Filter;