import {combineReducers} from 'redux';

import users from "./users"
import token from "./token"


export default combineReducers({users},{token})