import React from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import Moment from 'moment';

import Separator from '../../components/Separator';
import { goToSpeaker } from '../../navigation/navigationHelpers';
import { styles } from './styles';

const Session = ({ sessionData, speakerData }) => {
    return (
        <ScrollView style={styles.sceneContain}>
            <View style={styles.descriptionContainer}>
                <Text style={styles.subTitle}>
                    {sessionData.location}
                </Text>
                <Text style={styles.subHeader}>
                    {sessionData.title}
                </Text>
                <Text style={styles.startTime}>
                    {Moment.unix(sessionData.start_time).format('h:mm A')}
                </Text>
                <Text style={styles.description}>
                    {sessionData.description}
                </Text>
                <Text style={styles.presentedText}>
                    Presented by:
                </Text>
                <TouchableWithoutFeedback onPress={() => goToSpeaker(speakerData)}>
                    <View style={styles.speakerContainer}>
                        <Image
                            style={styles.speakerImage}
                            source={{ uri: speakerData.image }}
                        />
                        <Text style={styles.speakerName}>{speakerData.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Separator />
            </View >
        </ScrollView >
    );
};

export default Session;

Session.propTypes = {

};

