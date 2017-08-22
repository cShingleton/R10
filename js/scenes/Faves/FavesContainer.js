import React, { Component } from 'react';

import Loader from '../../components/Loader';
import Faves from './Faves';

class FavesContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    static route = {
        navigationBar: {
          title: 'Faves',
        }
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
}

export default FavesContainer;
