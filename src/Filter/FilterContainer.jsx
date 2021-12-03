
import { connect } from "react-redux";
import { setUsersThunkCreator } from "../redux/users-reducer";
import Filter from "./Filter";




const FilterContainer = connect(null, {setUsersThunkCreator})(Filter);
export default FilterContainer;