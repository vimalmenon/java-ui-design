import common from "./common/common-state";
import preferences from "./preferences/preferences-state";
import component from "./component/component-state";
import user from "./user/user-state";
import snackBar from "./snack-bar/snack-bar.state";
import session from "./session/session.state";

const state = {
	snackBar,
	common,
	component,
	preferences,
	user,
	session
};


export default state;

