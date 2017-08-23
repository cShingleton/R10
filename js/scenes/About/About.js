import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';

import Separator from '../../components/Separator';
import { styles } from './styles';

const About = ({ conductData }) => {
    return (
        <ScrollView style={styles.sceneContain}>
            <View style={styles.logoContainer}>
                <Image
                    resizeMode={"contain"}
                    source={require('../../assets/images/r10_logo.png')}
                />
            </View>
            <Separator />
            <View style={styles.descriptionContainer}>
                <Text style={styles.text}>
                    R10 is a conference that focuses on just about any subject related to dev.
                </Text>
                <Text style={styles.subHeader}>
                    Date &amp; Venue
                </Text>
                <Text style={styles.text}>
                    The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.
                </Text>
                <Text style={styles.subHeader}>
                    Code of Conduct
                </Text>
                <FlatList
                    data={conductData}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.conductHeader}>+ {item.title}</Text>
                            <Text style={styles.conductText}>{item.description}</Text>
                        </View>
                    )}
                />
                <Separator />
                <Text style={{ marginTop: 20 }}>© RED Academy 2017</Text>
            </View>
        </ScrollView>
    );
};

export default About;

About.propTypes = {
    conductData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
};

