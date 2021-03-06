import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile67189Navigator from '../features/UserProfile67189/navigator';
import Tutorial67188Navigator from '../features/Tutorial67188/navigator';
import NotificationList67160Navigator from '../features/NotificationList67160/navigator';
import Settings67159Navigator from '../features/Settings67159/navigator';
import Settings67151Navigator from '../features/Settings67151/navigator';
import UserProfile67149Navigator from '../features/UserProfile67149/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile67189: { screen: UserProfile67189Navigator },
Tutorial67188: { screen: Tutorial67188Navigator },
NotificationList67160: { screen: NotificationList67160Navigator },
Settings67159: { screen: Settings67159Navigator },
Settings67151: { screen: Settings67151Navigator },
UserProfile67149: { screen: UserProfile67149Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
