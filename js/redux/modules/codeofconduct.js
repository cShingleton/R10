const SET_CONDUCT_DATA = 'SET_CONDUCT_DATA';

const initialState = {
    loading: true,
    conductData: []
};

export function setConductData(conductData) {
    return {
        type: SET_CONDUCT_DATA,
        payload: conductData
    };
}

export function ConductReducer(state = initialState, action) {
    switch (action.type) {
    case SET_CONDUCT_DATA:
        return {
            loading: false,
            conductData: action.payload
        }
    default:
        return state;
    }
}

//Thunk actions
export function fetchConductData() {
    return function (dispatch) {
    let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                dispatch(setConductData(data));
            })
            .catch(error => `Error fetching JSON: ${error}`);
    }
}
