import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../containers/MainScreen';
import NavigationConstants from '../constants/NavigationConstants';
import LoginScreen from '../containers/LoginScreen';

const Stack = createNativeStackNavigator();

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

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigationConstants.beforeLogin}
        component={beforeLogin}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
