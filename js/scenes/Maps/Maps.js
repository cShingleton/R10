import React from 'react';
import MapView from 'react-native-maps';

import { styles } from './styles';

const Maps = () => {
    return (
        <MapView
            style={styles.map}
            region={{
                latitude: 49.263509,
                longitude: -123.138117,
                latitudeDelta: 0.0422,
                longitudeDelta: 0.0221,
            }}
        >
            <MapView.Marker
                coordinate={{ latitude: 49.263509, longitude: -123.138117}}
                image={require('../../assets/images/map_pin.png')}
            />
        </MapView>
    );
};

export default Maps;

Maps.propTypes = {

};

