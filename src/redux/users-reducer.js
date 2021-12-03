import { getUser } from "../api/api";

const SET_USERS = "SET_USERS";
const CLEAR_USERS = "CLEAR_USERS";

let initialState = {
  users: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.user};
    case CLEAR_USERS:
      return { ...state, users: [] };
    default:
      return state;
  }
};

export const setUsers = (user) => ({ type: SET_USERS, user });
export const clearUsers = () => ({ type: CLEAR_USERS });

export const setUsersThunkCreator = (filter) => {
  return (dispatch) => {
    dispatch(clearUsers());
    if (filter === "all") {
        getUser().then(response => {
          console.log(response);
          dispatch(setUsers(response.slice(0, 15)));
        });
    } else if (filter === "men") {
      getUser().then(response => {
        console.log(response);
        dispatch(setUsers(response.filter(user => user.gender === 'male').slice(0, 15)));
      });
    } else {
      getUser().then(response => {
        console.log(response);
        dispatch(setUsers(response.filter(user => user.gender === 'female').slice(0, 15)));
      });
    }


  };
};
