import * as React from 'react';
import { Provider } from 'react-redux';
import {
  Switch,
  Route
} from "react-router-dom";
import {Spinner} from "react-redux-spinner";

import store from "./redux";
import Pages from "./pages";

class Main extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Switch>
          <Pages />
        </Switch>
        <Spinner config={{}}/>
    </Provider>
    )
  }
}
export default Main;