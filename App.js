
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import  { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export class Home extends React.Component {
  render() {
  return (
    <View>
    <Text>"hello"</Text>
    </View>
  )
  }
}


export class Social extends React.Component {
  render() {
  return (
    <View>
    <Text>social</Text>
    </View>
  )
  }
}


export class Profile extends React.Component {
  render() {
  return (
    <View>
    <Text>profile</Text>
    </View>
  )
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Social: Social,
  Profile: Profile
});

export default createAppContainer(TabNavigator)