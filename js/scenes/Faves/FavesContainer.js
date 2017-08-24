import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import realm from '../../config/models';
import Loader from '../../components/Loader';
import { fetchFaveData } from '../../redux/modules/faves';
import Faves from './Faves';

class FavesContainer extends Component {

    static route = {
        navigationBar: {
          title: 'Faves',
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchFaveData());
        realm.addListener('change', () => this.props.dispatch(fetchFaveData()));
    }

    render() {
        if (this.props.loading) {
            return (
                <Loader />
            );
        } else {
            return (
                <Faves 
                    faveData={this.props.faveData}
                    unformatFaveData={this.props.unformattedFaveData} 
                />
            );
        }
    }
}

const mapStateToProps = (state) => ({
    faveData: state.faves.faveData,
    unformattedFaveData: state.faves.unformatFaveData,
    loading: state.faves.loading
});

export default connect(mapStateToProps)(FavesContainer);

FavesContainer.propTypes = {
    loading: PropTypes.bool,
    faveData: PropTypes.arrayOf(PropTypes.shape({
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
