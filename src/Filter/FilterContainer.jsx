
import { connect } from "react-redux";
import { addFilters, setUsersThunkCreator } from "../redux/users-reducer";
import Filter from "./Filter";


const mapStateToProps = (state) => {
    return {
      filters: state.usersPage.filters
    }
}


const FilterContainer = connect(mapStateToProps, {setUsersThunkCreator, addFilters})(Filter);
export default FilterContainer;