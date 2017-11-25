import { AppRegistry } from 'react-native';

import React, {Component} from 'react';
import { Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import DecodeScreen from './app/screens/Decode';
import EncodeScreen from './app/screens/Encode';
import LearnScreen from './app/screens/Learn';
import SettingsScreen from './app/screens/Settings';
import { colors } from './app/config/styles';

const Tabs = TabNavigator({
    DecodeScreen: {
      screen: DecodeScreen,
      navigationOptions: {
        tabBarLabel: 'Decode',
      },
    },
    EncodeScreen: {
        screen: EncodeScreen,
        navigationOptions: {
          tabBarLabel: 'Encode',
        },
    },
    LearnScreen: {
        screen: LearnScreen,
        navigationOptions: {
          tabBarLabel: 'Learn',
        },
    },
    SettingsScreen: {
        screen: SettingsScreen,
        navigationOptions: {
          tabBarLabel: 'Settings',
        },
    }
},{
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: colors.activeTintColor,
        labelStyle: {
          fontSize: 12,
          fontWeight: "bold"
        },
        style: {
          backgroundColor: colors.header
        },
      }
    
});


AppRegistry.registerComponent('MorseProject', () => Tabs);
