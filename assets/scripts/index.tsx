import * as React from 'react';
import { Provider } from 'react-redux';
import {
  Switch,
  Route
} from "react-router-dom";
import {Spinner} from "react-redux-spinner";
import { ToastProvider } from "react-toast-notifications";

import store from "./redux";
import Pages from "./pages";

class Main extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ToastProvider
          autoDismiss
          autoDismissTimeout={3000}>
          <Switch>
            <Pages />
          </Switch>
          <Spinner config={{}}/>
        </ToastProvider>
    </Provider>
    )
  }
}
export default Main;