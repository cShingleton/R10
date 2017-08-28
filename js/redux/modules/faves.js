import { queryFaves } from '../../config/models';
import { formatSessionData } from '../../lib/helperFunctions';
import { AsyncStorage } from 'react-native';

const SET_FAVES_DATA = 'SET_FAVES_DATA';
const SET_FAVE_IDS = 'SET_UNFORMAT_FAVE_DATA';

const initialState = {
    loading: true,
    faveData: [],
    faveIds: []
};

export function setFaveData(faveData) {
    return {
        type: SET_FAVES_DATA,
        payload: faveData
    };
}

export function setFaveIds(faveIds) {
    return {
        type: SET_FAVE_IDS,
        payload: faveIds
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
        case SET_FAVE_IDS:
            return {
                ...state,
                loading: false,
                faveIds: action.payload
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
                const faveIds = filterData.map(fave => fave.session_id);
                dispatch(setFaveIds(faveIds));
                const formattedData = formatSessionData(filterData);
                dispatch(setFaveData(formattedData));
            }).catch(error => `Error fetching JSON: ${error}`);
    }
}
