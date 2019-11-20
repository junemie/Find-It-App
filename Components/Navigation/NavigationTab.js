import React from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../TabBarIcon';
import { HomeScreen, WikiResults, WikiSingleResult, BookmarkScreen } from '../Screen'
import Colors from '../../constants/Colors'
const HomeBar = createStackNavigator({
  Home: HomeScreen,
  WikiResults: WikiResults,
  WikiSingleResult: WikiSingleResult
})

HomeBar.navigationOptions = ({
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='ios-home'
    />
  )
})

const BookmarkBar = createStackNavigator({
  Bookmarks: BookmarkScreen
})

BookmarkBar.navigationOptions = ({
  tabBarLabel: 'Bookmark',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='ios-bookmark'
    />
  )
})

export default NavigationTab = createMaterialBottomTabNavigator({
  HomeBar,
  BookmarkBar,
}, {
    activeTintColor: Colors.selected
  })


