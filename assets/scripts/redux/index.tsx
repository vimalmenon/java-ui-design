import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";


import reducer from "../state/reducer";
import state from "../state";

import logger from "./middlware/logger";
import reducerMiddleware from "./middlware/reducer";

export default createStore(reducer, state, applyMiddleware(thunk, logger));