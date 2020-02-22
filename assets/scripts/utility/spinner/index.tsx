import {pendingTask, begin, end} from "react-redux-spinner";

import store from "store";

export const startSpinner = () => {
    store.dispatch({
        type: 'START_SPINNER',
        [pendingTask]: begin
    });
};
export const stopSpinner = () => {
    store.dispatch({
        type: 'STOP_SPINNER',
        [pendingTask]: end
    });
};
export default {
	startSpinner,
	stopSpinner
};