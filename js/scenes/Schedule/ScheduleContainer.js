import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import Schedule from './Schedule';
import realm from '../../config/models';
import { fetchScheduleData } from '../../redux/modules/schedule';
import { fetchFaveData } from '../../redux/modules/faves';

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
                    faveData={this.props.faveData}
                />
            );
        }
    }
}

const mapStateToProps = (state) => ({
    scheduleData: state.schedule.scheduleData,
    loading: state.schedule.loading,
    faveData: state.faves.unformatFaveData
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
    dispatch: PropTypes.func
};
