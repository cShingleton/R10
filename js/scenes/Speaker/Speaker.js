import React from 'react';
import PropTypes from 'prop-types';
import { Image, Linking, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import { returnToSession } from '../../navigation/navigationHelpers';
import Button from '../../components/Button';

const Speaker = ({ speakerData }) => {
    return (
        <ScrollView style={styles.sceneContain}>
            <View style={styles.titleContainer}>
                <TouchableWithoutFeedback onPress={() => returnToSession()}>
                    <Icon name='ios-close' size={36} color='white' style={styles.cross} />
                </TouchableWithoutFeedback>
                <Text style={styles.aboutTitle}>
                    About the Speaker
                </Text>
            </View >
            <View style={styles.speakerContainer}>
                <Image
                    style={styles.speakerImage}
                    source={{ uri: speakerData.image }}
                />
                <Text style={styles.speakerName}>{speakerData.name}</Text>
                <Text style={styles.speakerBio}>{speakerData.bio}</Text>
                <Button 
                    text='Read more on Wikipedia'
                    onPress={() => Linking.openURL(speakerData.url).catch(err => ('An error occurred', err))}
                />
            </View>
        </ScrollView >
    );
};

export default Speaker;

Speaker.propTypes = {
    speakerData: PropTypes.objectOf(PropTypes.string)
};

