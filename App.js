import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


/**
 * Screen Imports
 */
import WelcomeScreen from './src/screens/WelcomeScreen';
import Home from './src/screens/Home';
import Services from './src/screens/Services';
import LocationPermission from './src/screens/LocationPermission';
import Notifications from './src/screens/Notifications';
import Settings from './src/screens/Settings';
import Info from './src/screens/Info';


/**
 * Stack const that is used to trigger navigation
 */
const Stack = createStackNavigator()


/**
 * 
 * @returns  Navigation Screens for Mystro clone
 */

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Welcome">
        
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Location" component={LocationPermission} options={{headerShown: false}}/>
        <Stack.Screen name="Notifications" component={Notifications} options={{headerShown: false}}/>
        <Stack.Screen name="Services" component={Services} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>        
        <Stack.Screen name="Settings" component={Settings} />        
        <Stack.Screen name="Info" component={Info} />        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

