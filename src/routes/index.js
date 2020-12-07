import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const AppStack = createStackNavigator();

import Login from '../pages/Login';
import TabNavigator from './tabNavigator';

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AppStack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="TabNavigator" component={TabNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
