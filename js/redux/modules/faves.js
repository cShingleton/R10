import { queryFaves } from '../../config/models';
import { formatSessionData } from '../../lib/helperFunctions';

const SET_FAVES_DATA = 'SET_FAVES_DATA';
const SET_UNFORMAT_FAVE_DATA = 'SET_UNFORMAT_FAVE_DATA';

const initialState = {
    loading: true,
    faveData: [],
    unformatFaveData: []
};

export function setFaveData(faveData) {
    return {
        type: SET_FAVES_DATA,
        payload: faveData
    };
}

export function setUnformattedFaveData(faveData) {
    return {
        type: SET_UNFORMAT_FAVE_DATA,
        payload: faveData
    }
}

export function FavesReducer(state = initialState, action) {
    switch (action.type) {
    case SET_FAVES_DATA:
        return {
            ...state,
            loading: false,
            faveData: action.payload
        }
    case SET_UNFORMAT_FAVE_DATA:
        return {
            ...state,
            loading: false,
            unformatFaveData: action.payload
        }
    default:
        return state;
    }
}

//Thunk actions
export function fetchFaveData() {
    return function (dispatch) {
        const faveData = queryFaves();
        let endpoint = `https://r10app-95fea.firebaseio.com/sessions.json`;
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                const filterData = data.filter(item => faveData.find(el => el.id === item.session_id));
                dispatch(setUnformattedFaveData(filterData));
                const formattedData = formatSessionData(filterData);
                dispatch(setFaveData(formattedData));
            })
            .catch(error => `Error fetching JSON: ${error}`);
    }
}
