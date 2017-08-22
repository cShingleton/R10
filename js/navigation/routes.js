import { createRouter } from '@expo/ex-navigation';

import About from '../scenes/About';
import Faves from '../scenes/Faves';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session';
import Speaker from '../scenes/Speaker';

const Router = createRouter(() => ({
    about: () => About,
    faves: () => Faves,
    schedule: () => Schedule,
    session: () => Session,
    Speaker: () => Speaker
}));

export default Router;