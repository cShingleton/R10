import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import Faves from './Faves';
import { styles } from './styles';

class FavesContainer extends Component {

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
                <Faves />
            );
        }
    }
};

export default FavesContainer;

FavesContainer.propTypes = {

};