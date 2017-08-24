import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

import { ConductReducer } from './modules/codeofconduct';
import { FavesReducer } from './modules/faves';
import { ScheduleReducer } from './modules/schedule';
import { SessionReducer } from './modules/session';

const rootReducer = combineReducers({
    navigation: NavigationReducer,
    conduct: ConductReducer,
    schedule: ScheduleReducer,
    session: SessionReducer,
    faves: FavesReducer
 });

export default rootReducer;
