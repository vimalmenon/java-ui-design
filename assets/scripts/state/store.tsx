import { createStore } from "redux";

import reducer from "./reducer";
import state from "./index";


import middleware from "./middleware";

export default createStore(reducer, state, middleware);