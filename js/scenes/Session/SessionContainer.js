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
                    faveIds={this.props.faveIds}
                />
            );
        }
    }
}

const mapStateToProps = (state) => ({
    faveIds: state.faves.faveIds,
    speakerData: state.session.speaker,
    loading: state.session.loading
});

export default connect(mapStateToProps)(SessionContainer);

SessionContainer.propTypes = {
    dispatch: PropTypes.func,
    loading: PropTypes.bool,
    //speakerData: PropTypes.objectOf(PropTypes.string),
    // faveData: PropTypes.arrayOf(PropTypes.shape({
    //     description: PropTypes.string,
    //     location: PropTypes.string,
    //     session_id: PropTypes.string,
    //     speaker: PropTypes.string,
    //     start_time: PropTypes.number,
    //     title: PropTypes.string
    // })),
    // sessionData: {
    //     item: PropTypes.shape({
    //         description: PropTypes.string,
    //         location: PropTypes.string,
    //         session_id: PropTypes.string,
    //         speaker: PropTypes.string,
    //         start_time: PropTypes.number,
    //         title: PropTypes.string
    //     })
    // }
};