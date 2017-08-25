import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, LayoutAnimation, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

class ConductItem extends Component {

    constructor() {
        super();
        this.state = {
            display: false,
            rotatation: new Animated.Value(0)
        };
    }

    onPress = () => {
        LayoutAnimation.easeInEaseOut();
        this.setState({ display: !this.state.display });
        this.state.rotatation.setValue(0);
        Animated.timing( this.state.rotatation, { toValue: 1, duration: 500})
                .start();
    };

    render() {
        const spin = this.state.rotatation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
        });

        return (
            <View>
                <TouchableOpacity onPress={this.onPress}>
                    <View style={styles.conductHeaderContainer}>
                        <Animated.Text style={[ styles.conductHeader, { transform: [{ rotate: spin }] } ]}>
                            {(this.state.display) ? '-' : '+'}
                        </Animated.Text>
                        <Text style={styles.conductHeader}>{this.props.itemData.title}</Text>
                    </View>
                </TouchableOpacity>
                {this.state.display && <Text
                    style={styles.conductText}>
                    {this.props.itemData.description}
                </Text>}
            </View>
        );
    }
}

export default ConductItem;

ConductItem.propTypes = {
    itemData: PropTypes.objectOf(PropTypes.string)
};
