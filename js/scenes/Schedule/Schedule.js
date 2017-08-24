import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import ScheduleList from '../../components/ScheduleList';

const Schedule = ({ sessionData, faveIds }) => {

    return (
        <View>
            <ScheduleList 
                data={sessionData}
                faves={faveIds}
                navigatorUID={'Schedule'}
            />
        </View>
    );
};

export default Schedule;

Schedule.propTypes = {
    sessionData: PropTypes.arrayOf(PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string,
            location: PropTypes.string,
            session_id: PropTypes.string,
            speaker: PropTypes.string,
            start_time: PropTypes.number,
            title: PropTypes.string
        })),
        title: PropTypes.number
    })),
    // faveData: PropTypes.arrayOf(PropTypes.shape({
    //     description: PropTypes.string,
    //     location: PropTypes.string,
    //     session_id: PropTypes.string,
    //     speaker: PropTypes.string,
    //     start_time: PropTypes.number,
    //     title: PropTypes.string
    // }))
};

