import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';
import { colors, typography } from '../../config/styles';

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient 
                start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
                colors={[colors.purple, colors.blue]} 
                style={styles.button}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default Button;