import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchFaveData } from '../../redux/modules/faves';
import { fetchScheduleData } from '../../redux/modules/schedule';
import Loader from '../../components/Loader';
import realm from '../../config/models';
import Schedule from './Schedule';

class ScheduleContainer extends Component {

    static route = {
        navigationBar: {
          title: 'Schedule',
        }
    }

    componentDidMount() {
       this.props.dispatch(fetchFaveData());
       this.props.dispatch(fetchScheduleData());
       realm.addListener('change', () => this.props.dispatch(fetchFaveData()));
    }

    render() {
        if (this.props.loading) {
            return (
                <Loader />
            );
        } else {
            return (
                <Schedule 
                    sessionData={this.props.scheduleData} 
                    faveIds={this.props.faveIds}
                />
            );
        }
    }
}

const mapStateToProps = (state) => ({
    scheduleData: state.schedule.scheduleData,
    loading: state.schedule.loading,
    faveIds: state.faves.faveIds
});

export default connect(mapStateToProps)(ScheduleContainer);

ScheduleContainer.propTypes = {
    loading: PropTypes.bool,
    scheduleData: PropTypes.arrayOf(PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string,
            location: PropTypes.string,
            session_id: PropTypes.string,
            speaker: PropTypes.string,
            start_time: PropTypes.number,
            title: PropTypes.string
        })),
        title: PropTypes.number
    })),
    dispatch: PropTypes.func,
    // faveData: PropTypes.arrayOf(PropTypes.shape({
    //     description: PropTypes.string,
    //     location: PropTypes.string,
    //     session_id: PropTypes.string,
    //     speaker: PropTypes.string,
    //     start_time: PropTypes.number,
    //     title: PropTypes.string
    // }))
};
