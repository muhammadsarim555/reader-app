import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';

// SCREENS
import {Screens} from '../containers';
import Drawer from './drawer';

const AppNavigator = createStackNavigator(
  {
    // Login: Screens.Login,
    // Register: Screens.Register,
    Home: Screens.Home,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      header: null,
      headerForceInset: {top: 'never', bottom: 'never'},
    },
  },
);

const AppDrawer = createDrawerNavigator(
  {
    AppNavigator,
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: Drawer,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 90,
    drawerType: 'slide',
  },
);

export default createAppContainer(AppDrawer);
