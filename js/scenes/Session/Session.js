import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import Moment from 'moment';
import { 
    Image, 
    Platform, 
    ScrollView, 
    Text, 
    TouchableWithoutFeedback, 
    View 
} from 'react-native';

import Button from '../../components/Button';
import { createFave, deleteFave } from '../../config/models';
import { goToSpeaker } from '../../navigation/navigationHelpers';
import Separator from '../../components/Separator';
import { styles } from './styles';

const Session = ({ sessionData, speakerData, faveIds }) => {

    const matchedId = faveIds.find(item => item === sessionData.session_id);
    //const match = faveIds[sessionData.session_id];

    // const faveIds = {
    //     "session_id": {
    //         //sessionData
    //     }
    // }

    return (
        <ScrollView style={styles.sceneContain}>
            <View style={styles.descriptionContainer}>
                <View style={styles.subContainer}>
                    <Text style={styles.subTitle}>
                        {sessionData.location}
                    </Text>
                    {(matchedId)
                        ? <Icon 
                            name={(Platform.OS === 'ios') ? "ios-heart" : "md-heart"}
                            style={styles.iconHeart} 
                            size={16} />
                        : null
                    }
                </View>
                <Text style={styles.subHeader}>
                    {sessionData.title}
                </Text>
                <Text style={styles.startTime}>
                    {Moment.unix(sessionData.start_time).format('h:mm A')}
                </Text>
                <Text style={styles.description}>
                    {sessionData.description}
                </Text>
                {(speakerData) ?
                    <View>
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
                    </View>
                    : null}
                <Separator />
                <Button
                    text={
                        (matchedId)
                            ? "Remove from Faves"
                            : "Add to Faves"
                    }
                    onPress={
                        (matchedId)
                            ? () => deleteFave(sessionData.session_id)
                            : () => createFave(sessionData.session_id)
                    }
                />
            </View >
        </ScrollView >
    );
};

export default Session;

Session.propTypes = {
    speakerData: PropTypes.objectOf(PropTypes.string),
    faveIds: PropTypes.arrayOf(PropTypes.string),
    sessionData: PropTypes.shape({
        description: PropTypes.string,
        location: PropTypes.string,
        session_id: PropTypes.string,
        speaker: PropTypes.string,
        start_time: PropTypes.number,
        title: PropTypes.string
    })
};

