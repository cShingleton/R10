import React, { Component } from 'react';

import Loader from '../../components/Loader';
import Maps from './Maps';

class MapsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    static route = {
        navigationBar: {
          title: 'Maps',
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
                <Maps />
            );
        }
    }
}

export default MapsContainer;
