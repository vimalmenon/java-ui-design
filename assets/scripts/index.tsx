import * as React from "react";
import { Provider } from "react-redux";
import {Spinner} from "react-redux-spinner";
import { ToastProvider } from "react-toast-notifications";

import store from "./state/store";
import Pages from "./pages";

class Main extends React.Component {
	render () {
		return (
			<Provider store={store}>
				<ToastProvider
					autoDismiss
					autoDismissTimeout={3000}>
					<Pages />
					<Spinner config={{}}/>
				</ToastProvider>
			</Provider>
		);
	}
}
export default Main;