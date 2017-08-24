import { createRouter } from '@expo/ex-navigation';

import About from '../scenes/About';
import Faves from '../scenes/Faves';
import Maps from '../scenes/Maps';
import NavigationLayout from '../navigation/NavigationLayout';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session';
import Speaker from '../scenes/Speaker';

const Router = createRouter(() => ({
    about: () => About,
    faves: () => Faves,
    maps: () => Maps,
    navigation: () => NavigationLayout,
    schedule: () => Schedule,
    session: () => Session,
    speaker: () => Speaker
}));

export default Router;
