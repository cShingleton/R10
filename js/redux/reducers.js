import { NavigationReducer } from '@expo/ex-navigation';
import { combineReducers } from 'redux';

import { ConductReducer } from './modules/codeofconduct';
import { ScheduleReducer } from './modules/schedule';
import { SessionReducer } from './modules/session';

const rootReducer = combineReducers({
    navigation: NavigationReducer,
    conduct: ConductReducer,
    schedule: ScheduleReducer,
    session: SessionReducer
 });

export default rootReducer;