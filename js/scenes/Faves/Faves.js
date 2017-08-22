import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';

import { styles } from './styles';

const Faves = ({ sessionData }) => {
    return (
        <ScrollView>
            <Text>This is the Faves view!</Text>
        </ScrollView>
    );
};

export default Faves;

Faves.propTypes = {

};

