import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Faves from './Faves';
import { fetchFaveData } from '../../redux/modules/faves';
import Loader from '../../components/Loader';
import realm from '../../config/models';


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
                    faveIds={this.props.faveIds} 
                />
            );
        }
    }
}

const mapStateToProps = (state) => ({
    faveData: state.faves.faveData,
    faveIds: state.faves.faveIds,
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
    dispatch: PropTypes.func,
    faveIds: PropTypes.arrayOf(PropTypes.string)
};
