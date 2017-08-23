import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import Schedule from './Schedule';
import { fetchScheduleData } from '../../redux/modules/schedule';

class ScheduleContainer extends Component {

    static route = {
        navigationBar: {
          title: 'Schedule',
        }
    }

    componentDidMount() {
       this.props.dispatch(fetchScheduleData());
    }

    render() {
        if (this.props.loading) {
            return (
                <Loader />
            );
        } else {
            return (
                <Schedule sessionData={this.props.scheduleData} />
            );
        }
    }
}

const mapStateToProps = (state) => ({
    scheduleData: state.schedule.scheduleData,
    loading: state.schedule.loading
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
