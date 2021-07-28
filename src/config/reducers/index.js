import { combineReducers } from 'redux';

import {alertReducer} from "./alertReducer";
import {authenticationReducer} from "./authenticationReducer";
import {registrationReducer} from "./registrationReducer";
import {usersReducer} from "./usersReducer";

const rootReducer = combineReducers({
    alertReducer,
    authenticationReducer,
    registrationReducer,
    usersReducer
});

export default rootReducer;