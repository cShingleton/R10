import React from 'react';
import Moment from 'moment';
import { Platform, SectionList, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { goToSession } from '../../navigation/navigationHelpers';
import { styles } from './styles';

const ScheduleList = ({ data, faves, navigatorUID }) => {
    return (
        <SectionList
            keyExtractor={(item) => (item.session_id)}
            renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={() => goToSession(navigatorUID, { item })}>
                    <View style={styles.talkContainer}>
                        <Text style={styles.Title}>{item.title}</Text>
                        <View style={styles.subContainer}>
                            <Text style={styles.subTitle}>{item.location}</Text>
                            {(faves.find(fave => fave === item.session_id))
                                ? <Icon name={(Platform.OS === 'ios') ? "ios-heart" : "md-heart"}
                                    style={styles.iconHeart}
                                    size={16} />
                                : null
                            }
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            )}
            renderSectionHeader={(headerItem) => (
                <Text style={styles.time}>{Moment.unix(headerItem.section.title).format('h:mm A')}</Text>
            )}
            ItemSeparatorComponent={() =>
                <View style={styles.separator} />
            }
            sections={data}
        />
    );
};

export default ScheduleList;
