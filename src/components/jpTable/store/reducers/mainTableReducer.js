import * as Types from "./../actions/types";

export function mainTableReducer(state, action) {
    switch (action.type) {
        case Types.SET_ORDER:
            return { ...state, order: action.payload };
        case Types.SET_ORDER_BY:
            return { ...state, orderBy: action.payload };
        case Types.SET_SELECTED:
            return { ...state, selected: action.payload };
        case Types.SET_PAGE:
            return { ...state, page: action.payload };
        case Types.SET_DENSE:
            return { ...state, dense: action.payload };
        case Types.SET_ROWS_PER_PAGE:
            return { ...state, rowsPerPage: action.payload };
        case Types.SET_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };
        case Types.SET_IS_SEARCHING:
            return { ...state, isSearching: action.payload };
        case Types.SET_IS_SEARCHING_MULTI:
            return { ...state, isSearchingMulti: action.payload };
        case Types.SET_MULTI_SEARCH_TERMS:
            return { ...state, multiSearchTerms: action.payload };
        case Types.SET_IS_EXACTLY:
            return { ...state, isExactly: action.payload };
        default:
            return state;
    }
}