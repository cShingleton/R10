import { formatDataObject } from '../../lib/helperFunctions';

const SET_SESSION_DATA = 'SET_SESSION_DATA';

const initialState = {
    loading: true,
    speaker: {}
};

export function setSessionData(sessionData) {
    return {
        type: SET_SESSION_DATA,
        payload: sessionData
    };
}

export function SessionReducer(state = initialState, action) {
    switch (action.type) {
    case SET_SESSION_DATA:
        return {
            ...state,
            loading: false,
            speaker: action.payload
        }
    default:
        return state;
    }
}

//Thunk actions
export function fetchSessionData(speakerId) {
    return function (dispatch) {
        let endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy=%22speaker_id%22&equalTo=%22${speakerId}%22`;
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                const formattedData = formatDataObject(data);
                dispatch(setSessionData(formattedData));
            })
            .catch(error => `Error fetching JSON: ${error}`);
    }
}
