import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Profile from './pages/Profile';
import Repositories from './pages/Repositories';
import Followers from './pages/Followers';

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AppStack.Navigator
        initialRouteName="Followers"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Profile" component={Profile} />
        <AppStack.Screen name="Repositories" component={Repositories} />
        <AppStack.Screen name="Followers" component={Followers} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
