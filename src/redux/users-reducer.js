import { getUser } from "../api/api";

const SET_USERS = "SET_USERS";
const CLEAR_USERS = "CLEAR_USERS";
const ADD_FILTERS = "ADD_FILTERS";

let initialState = {
  users: [],
  filters: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.user };
    case CLEAR_USERS:
      return { ...state, users: [], filters: [] };
    case ADD_FILTERS:
      return {
        ...state, filters: [...state.filters, action.filter].filter((item, i, arr) => {
          return arr.indexOf(item) == i;
        })
      };
    default:
      return state;
  }
};

export const setUsers = (user) => ({ type: SET_USERS, user });
export const clearUsers = () => ({ type: CLEAR_USERS });
export const addFilters = (filter) => ({ type: ADD_FILTERS, filter });

export const setUsersThunkCreator = (gender, filtersArr) => {
  const natFilter = (response) => {
    return response.filter((user) => {
      for (let i = 0; i < filtersArr.length; i++) {
        if (user.nat === filtersArr[i]) {
          return user;
        }
      }
    });
  };

  return (dispatch) => {
    dispatch(clearUsers());
    if (gender === "all") {
      getUser().then(response => {
        if (filtersArr.length === 0) {
          dispatch(setUsers(response.slice(0, 15)));
        } else {
          dispatch(setUsers(natFilter(response).slice(0, 15)));
        }

      });
    } else {
      getUser().then(response => {
        if (filtersArr.length === 0) {
          dispatch(setUsers(response.filter(user => user.gender === gender).slice(0, 15)));
        } else {
          dispatch(setUsers(natFilter(response.filter(user => user.gender === gender)).slice(0, 15)));
        }
      });
    }


  };
};
