import * as React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {StackNavigationProp} from '@react-navigation/stack';
import backgroundImage from '../images/forecastBuddyBG.png';

import WeatherForecastPage from './component/WeatherForecastPage';
import SettingsPage from './component/SettingsPage';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import './gesture-handler';

// Initialize Stack Navigator
const Stack = createNativeStackNavigator();

// Initialize Drawer Navigator
const Drawer = createDrawerNavigator();

function HomeScreen({navigation}) {
  return (
    <ImageBackground
      source={backgroundImage}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Go to WeatherForecastPage"
          onPress={() => navigation.navigate('WeatherForecastPage')}
        />
      </View>
    </ImageBackground>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen
          name="WeatherForecastPage"
          component={WeatherForecastPage}
        />
        <Drawer.Screen name="SettingsPage" component={SettingsPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
