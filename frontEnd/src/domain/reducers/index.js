import {combineReducers} from "redux";
import facturasReducer from "./facturaReducer";
import ticketReducer from './ticketReducer';


export default combineReducers({
    ticketReducer:ticketReducer,
    facturaReducer:facturasReducer
});
