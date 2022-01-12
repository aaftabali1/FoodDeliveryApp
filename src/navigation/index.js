import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../containers/MainScreen';
import NavigationConstants from '../constants/NavigationConstants';
import LoginScreen from '../containers/LoginScreen';
import Dashboard from '../containers/Dashboard';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const beforeLogin = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigationConstants.mainScreen}
        component={MainScreen}
      />
      <Stack.Screen
        name={NavigationConstants.loginScreen}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

const drawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={NavigationConstants.dashboard}
        component={Dashboard}
      />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigationConstants.beforeLogin}
        component={beforeLogin}
      />
      <Stack.Screen name={NavigationConstants.drawer} component={drawer} />
    </Stack.Navigator>
  );
};

export default Navigation;
