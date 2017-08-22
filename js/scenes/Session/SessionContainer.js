import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import Session from './Session';
import { styles } from './styles';

class SessionContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        if (this.state.isLoading) {
            this.setState({ isLoading: false });
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader />
            );
        } else {
            return (
                <Session />
            );
        }
    }
};

export default SessionContainer;

SessionContainer.propTypes = {

};