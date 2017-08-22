import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { styles } from './styles';

const Loader = () => (
    <ActivityIndicator
        animating={true}
        size="small"
        color="black"
        style={styles.activityIndicator}
    />
);

ActivityIndicator.propTypes = {

};

export default Loader;