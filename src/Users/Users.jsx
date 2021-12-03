import React from "react";
import classes from './Users.module.css';
const Users = (props) => {
  return <div className={classes.usersWrapper}>
    {props.users ? props.users.map((user, i) => <div key={i} className={classes.user}>
      <img src="" alt=""/>
      <div>{user.name.first}</div>
      <div>{user.gender}</div>
      <div>{user.email}</div>
      <div>{user.dob.date}</div>
    </div>) : console.log('hello')}

  </div>


}


export default Users;