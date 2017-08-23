import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import Session from './Session';
import { fetchSessionData } from '../../redux/modules/session';

class SessionContainer extends Component {

    static route = {
        navigationBar: {
          title: 'Session',
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchSessionData(this.props.sessionData.item.speaker));
    }

    render() {
        if (this.props.loading) {
            return (
                <Loader />
            );
        } else {
            return (
                <Session 
                    sessionData={this.props.sessionData.item}
                    speakerData={this.props.speakerData}
                    faveData={this.props.faveData}
                />
            );
        }
    }
}

const mapStateToProps = (state) => ({
    faveData: state.faves.unformatFaveData,
    speakerData: state.session.speaker,
    loading: state.session.loading
});

export default connect(mapStateToProps)(SessionContainer);

SessionContainer.propTypes = {

};