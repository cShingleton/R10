import { formatSessionData } from '../../lib/helperFunctions';

const SET_SCHEDULE_DATA = 'SET_SCHEDULE_DATA';

const initialState = {
    loading: true,
    scheduleData: []
};

export function setScheduleData(scheduleData) {
    return {
        type: SET_SCHEDULE_DATA,
        payload: scheduleData
    };
}

export function ScheduleReducer(state = initialState, action) {
    switch (action.type) {
    case SET_SCHEDULE_DATA:
        return {
            loading: false,
            scheduleData: action.payload
        }
    default:
        return state;
    }
}

//Thunk actions
export function fetchScheduleData() {
    return function (dispatch) {
        let endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json';
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                const formattedData = formatSessionData(data);
                dispatch(setScheduleData(formattedData));
            })
            .catch(error => `Error fetching JSON: ${error}`);
    }
}
