import React, { Component } from 'react';

import Loader from '../../components/Loader';
import Schedule from './Schedule';
import { formatSessionData } from '../../lib/helperFunctions';

class ScheduleContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }

    static route = {
        navigationBar: {
          title: 'Schedule',
        }
    }

    componentDidMount() {
        let endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json';
        fetch(endpoint)
            // if fetch is successful, read our JSON out of the response
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            })
            .catch(error => `Error fetching JSON: ${error}`);
    }

    componentDidUpdate() {
        if (this.state.data && this.state.isLoading) {
            this.setState({ data: formatSessionData(this.state.data)});
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
                <Schedule sessionData={this.state.data} />
            );
        }
    }
}

export default ScheduleContainer;
