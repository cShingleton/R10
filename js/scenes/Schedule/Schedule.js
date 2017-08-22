import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { SectionList, Text, View } from 'react-native';

import { styles } from './styles';

const Schedule = ({ sessionData }) => {
    return (
        <View>
            <SectionList
                sections={sessionData}
                //keyExtractor={(item) => {item.section.data.title}}
                renderItem={(item) => (
                    <View style={styles.talkContainer}>
                        <Text style={styles.Title}>{item.item.title}</Text>
                        <Text style={styles.subTitle}>{item.item.location}</Text>
                    </View>
                )}
                renderSectionHeader={(headerItem) => (
                    // take into account UTC offset and add unix method
                    <Text style={styles.time}>{Moment(headerItem.section.title).format('h:mm a')}</Text>
                )}
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
    }))
};

