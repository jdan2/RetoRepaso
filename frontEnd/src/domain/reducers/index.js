import {combineReducers} from "redux";
import ticketReducer from './ticketReducer';

export default combineReducers({
    ticketReducer:ticketReducer
});