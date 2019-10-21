import * as Types from "./../actions/types";


const useMainTableActions = dispatch => {


    const setOrder = isDesc => {
        //isDesc ? "asc" : "desc"

        if (isDesc) {
            dispatch({
                type: Types.SET_ORDER,
                payload: "asc"
            })
        } else {
            dispatch({
                type: Types.SET_ORDER,
                payload: "desc"

            })
        }
    }

    const setOrderBy = property => {
        dispatch({
            type: Types.SET_ORDER_BY,
            payload: property
        })
    }

    const setSelected = data => {
        dispatch({
            type: Types.SET_SELECTED,
            payload: data
        })
    }

    const setPage = pageNumber => {
        dispatch({
            type: Types.SET_PAGE,
            payload: pageNumber
        })
    }

    const setDense = dense => {
        dispatch({
            type: Types.SET_DENSE,
            payload: dense
        })
    }

    const setRowsPerPage = RowsPerPage => {
        dispatch({
            type: Types.SET_ROWS_PER_PAGE,
            payload: RowsPerPage
        })
    }

    const setSearchTerm = searchTerm => {
        dispatch({
            type: Types.SET_SEARCH_TERM,
            payload: searchTerm
        })
    }

    const setIsSearching = isSearching => {
        dispatch({
            type: Types.SET_IS_SEARCHING,
            payload: isSearching
        })
    }

    const setIsSearchingMulti = isSearchingMulti => {
        dispatch({
            type: Types.SET_IS_SEARCHING_MULTI,
            payload: isSearchingMulti
        })
    }

    const setMultiSearchTerms = searchTerms => {
        dispatch({
            type: Types.SET_MULTI_SEARCH_TERMS,
            payload: searchTerms
        })
    }

    const setIsExactly = e => {

        if (e.target.checked === true) {
            dispatch({
                type: Types.SET_IS_EXACTLY,
                payload: {
                    //...state.isExactly,
                    [e.target.name]: true
                }
            });
        } else {
            dispatch({
                type: Types.SET_IS_EXACTLY,
                payload: {
                    //...state.isExactly,
                    [e.target.name]: false
                }
            })
        }
    }


    return { setOrder, setOrderBy, setSelected, setPage, setDense, setRowsPerPage, setSearchTerm, setIsSearching, setIsSearchingMulti, setMultiSearchTerms, setIsExactly };
}

export default useMainTableActions;



