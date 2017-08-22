import React, { Component } from 'react';

import Loader from '../../components/Loader';
import About from './About';

class AboutContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }

    static route = {
        navigationBar: {
          title: 'About',
        }
    }

    componentDidMount() {
        let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
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
                <About conductData={this.state.data} />
            );
        }
    }
}

export default AboutContainer;
