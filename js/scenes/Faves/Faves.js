import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import ScheduleList from '../../components/ScheduleList';

const Faves = ({ faveData, faveIds }) => {
    return (
        <View>
            <ScheduleList 
                data={faveData}
                faves={faveIds}
                navigatorUID={'Faves'}
            />
        </View>
    );
};

export default Faves;

Faves.propTypes = {
    faveData: PropTypes.arrayOf(PropTypes.shape({
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
    // faveIds: PropTypes.arrayOf(PropTypes.shape({
    //     description: PropTypes.string,
    //     location: PropTypes.string,
    //     session_id: PropTypes.string,
    //     speaker: PropTypes.string,
    //     start_time: PropTypes.number,
    //     title: PropTypes.string
    // }))
};



