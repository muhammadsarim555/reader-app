import React from 'react';

// FILES
import Navigation from './src/navigations';

export default class HomeScreen extends React.Component {
  render() {
    console.disableYellowBox = true;
    return <Navigation />;
  }
}
