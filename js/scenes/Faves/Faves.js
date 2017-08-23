import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { SectionList, Text, TouchableWithoutFeedback, View } from 'react-native';

import { goToSession } from '../../navigation/navigationHelpers'; 
import { styles } from './styles';

const Faves = ({ faveData }) => {
    return (
        <View>
            <SectionList
                keyExtractor={(item) => (item.session_id)}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback onPress={() => goToSession('Faves', { item })}>
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
                sections={faveData}
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
    }))
};



