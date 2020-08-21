import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import reducer from "./reducer";
import state from "./index";

import logger from "./middleware/logger";

export default createStore(reducer, state, applyMiddleware(thunk, logger));