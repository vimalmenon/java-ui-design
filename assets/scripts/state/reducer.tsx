import {pendingTasksReducer as pendingTasks} from "react-redux-spinner";

import commonReducer from "./common/common-reducer";
import preferencesReducer from "./preferences/preferences-reducer";
import componentReducer from "./component/component-reducer";
import userReducer from "./user/user-reducer";


function reducer (oldState, action) {
	return {
		...oldState,
		common : commonReducer(oldState.common, action),
		preferences : preferencesReducer(oldState.preferences, action),
		component : componentReducer(oldState.component, action),
		pendingTasks : pendingTasks(oldState.pendingTasks, action),
		user: userReducer(oldState.user, action)
	};
}

export default reducer;