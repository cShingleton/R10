import React from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import { returnToSession } from '../../navigation/navigationHelpers';

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
            </View>
        </ScrollView >
    );
};

export default Speaker;

Speaker.propTypes = {

};

