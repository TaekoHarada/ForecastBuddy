import * as React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faBars } from '@fortawesome/free-solid-svg-icons';

import WeatherDetailsPage from './component/WeatherDetailsPage';
import SettingsPage from './component/SettingsPage';
import AddLocationScreen from './component/AddLocationScreen'; 

// Initialize Stack Navigator
const Stack = createNativeStackNavigator();

// Initialize Drawer Navigator
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to Weather Details Page"
        onPress={() => navigation.navigate('WeatherDetails')}
      />
    </View>
  );
}

function CustomHeader({ navigation, title }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <FontAwesomeIcon icon={faBars} size={24} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddLocation')}>
        <FontAwesomeIcon icon={faPlus} size={24} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
        header: ({ navigation }) => <CustomHeader navigation={navigation} title="Home" />
      }} />
      <Stack.Screen name='AddLocation' component={AddLocationScreen} options={ {title: "Add Location"} } />

    </Stack.Navigator>
  );
}



function WeatherDetailsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WeatherDetails"
        component={WeatherDetailsPage}
        options={({ navigation }) => ({
          header: () => <CustomHeader navigation={navigation} title="Weather Details" />,
        })}
      />
      <Stack.Screen
        name="AddLocation"
        component={AddLocationScreen}
        options={{ title: 'Add Location' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
      }}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Weather Details" component={WeatherDetailsStack} />
        <Drawer.Screen name="Settings" component={SettingsPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue'
  },
  icon: {
    marginHorizontal: 10,
  },
});
