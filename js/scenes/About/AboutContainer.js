import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import About from './About';
import { fetchConductData } from '../../redux/modules/codeofconduct';

class AboutContainer extends Component {

    static route = {
        navigationBar: {
          title: 'About',
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchConductData());
    }

    render() {
        if (this.props.loading) {
            return (
                <Loader />
            );
        } else {
            return (
                <About conductData={this.props.conductData} />
            );
        }
    }
}

const mapStateToProps = (state) => ({
    conductData: state.conduct.conductData,
    loading: state.conduct.loading
});

export default connect(mapStateToProps)(AboutContainer);

AboutContainer.propTypes = {
    loading: PropTypes.bool,
    conductData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    dispatch: PropTypes.func
};
