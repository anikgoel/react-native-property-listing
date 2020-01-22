import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PropertyListingScreen from './src/screens/PropertyListingScreen';


const navigator = createStackNavigator(
  {
    Listing: PropertyListingScreen
  },
  {
    initialRouteName: "Listing",
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);