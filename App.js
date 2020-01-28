import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// FILES
import Navigation from './src/navigations';
import {store, persistor} from './src/store';
import SplashScreen from 'react-native-splash-screen';

export default class HomeScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    SplashScreen.show();
  }

  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}
