import React from 'react';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// FILES
import Navigation from './src/navigations';
import { store, persistor } from "./src/store";

export default class HomeScreen extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (

      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>

    )
  }
}
