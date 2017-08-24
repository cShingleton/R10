import React from 'react';
import PropTypes from 'prop-types';
import { Image, Linking, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import Button from '../../components/Button';
import { returnToSession } from '../../navigation/navigationHelpers';
import { styles } from './styles';

const Speaker = ({ speakerData }) => {
    return (
        <ScrollView style={styles.sceneContain}>
            <View style={styles.titleContainer}>
                <View style={styles.crossContainer}>
                    <TouchableWithoutFeedback onPress={() => returnToSession()}>
                        <Icon name='ios-close' size={36} color='white' style={styles.cross} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.aboutTitleContainer}>
                    <Text style={styles.aboutTitle}>
                        About the Speaker
                </Text>
                </View>
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

