import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

import Profile from '../pages/Profile';
import Repositories from '../pages/Repositories';
import Followers from '../pages/Followers';
import Following from '../pages/Following';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Repositories"
        component={Repositories}
        options={{
          tabBarLabel: 'Repos',
          tabBarIcon: ({color, size}) => (
            <Feather name="github" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Followers"
        component={Followers}
        options={{
          tabBarLabel: 'Seguidores',
          tabBarIcon: ({color, size}) => (
            <Feather name="users" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Following"
        component={Following}
        options={{
          tabBarLabel: 'Seguindo',
          tabBarIcon: ({color, size}) => (
            <Feather name="user-check" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
