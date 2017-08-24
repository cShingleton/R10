import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Speaker from './Speaker';

class SpeakerContainer extends Component {

    render() {
        return (
            <Speaker speakerData={this.props.speakerData} />
        );
    }
}

export default SpeakerContainer;

SpeakerContainer.propTypes = {
    speakerData: PropTypes.objectOf(PropTypes.string)
};
