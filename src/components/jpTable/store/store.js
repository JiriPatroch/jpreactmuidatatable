import React from "react";
import PropTypes from "prop-types";
import { mainTableReducer } from "./reducers/mainTableReducer"

const initialState = {
    columnsData: [],
    order: "asc",
    orderBy: "id",
    selected: [],
    page: 0,
    dense: true,
    rowsPerPage: 5,
    searchTerm: "",
    isSearching: false,
    isSearchingMulti: false,
    multiSearchTerms: {},
    isExactly: {}
}

export const MainTableContext = React.createContext();

const StoreProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(mainTableReducer, initialState);

    return (
        <MainTableContext.Provider value={{ state, dispatch }}>
            {children}
        </MainTableContext.Provider>
    );
};

StoreProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default StoreProvider;