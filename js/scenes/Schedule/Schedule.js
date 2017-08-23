import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { SectionList, Text, TouchableWithoutFeedback, View } from 'react-native';

import { goToSession } from '../../navigation/navigationHelpers'; 
import { styles } from './styles';

const Schedule = ({ sessionData }) => {
    return (
        <View>
            <SectionList
                keyExtractor={(item) => (item.session_id)}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback onPress={() => goToSession('Schedule', { item })}>
                        <View style={styles.talkContainer}>
                            <Text style={styles.Title}>{item.title}</Text>
                            <Text style={styles.subTitle}>{item.location}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )}
                renderSectionHeader={(headerItem) => (
                    <Text style={styles.time}>{Moment.unix(headerItem.section.title).format('h:mm A')}</Text>
                )}
                ItemSeparatorComponent={() =>
                    <View style={styles.separator} />
                }
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

