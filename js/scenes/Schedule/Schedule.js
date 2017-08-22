import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { SectionList, Text, View } from 'react-native';

import { styles } from './styles';

const Schedule = ({ sessionData }) => {
    return (
        <View>
            <SectionList
                keyExtractor={(item) => (item.session_id)}
                renderItem={(item) => (
                    <View style={styles.talkContainer}>
                        <Text style={styles.Title}>{item.item.title}</Text>
                        <Text style={styles.subTitle}>{item.item.location}</Text>
                    </View>
                )}
                renderSectionHeader={(headerItem) => (
                    <Text style={styles.time}>{Moment.unix(headerItem.section.title).format('h:mm A')}</Text>
                )}
                sections={sessionData}
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

