import React from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TabBarIcon from '../TabBarIcon';
import { HomeScreen, WikiResult, BookmarkScreen, PhotoScreen } from '../Screen'
import Colors from '../../constants/Colors'
import { connect } from 'react-redux';
import { updateCurrentImage, clearImage, getWiki } from '../../store/reducer';

const HomeBar = createStackNavigator({
  Home: HomeScreen,
  PhotoScreen: PhotoScreen,
  WikiResult: WikiResult,
  // WikiSingleResult: WikiSingleResult
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

const BottomTab = createBottomTabNavigator({
  HomeBar,
  BookmarkBar,
}, {
    activeTintColor: Colors.selected
  })

NavigationContainer = createAppContainer(BottomTab);

const NavigationTab = props => {
  return (
    <NavigationContainer screenProps={props} />
  )
}

const mapStateToProps = state => ({
  currentImage: state.currentImage,
  currentWiki: { snipped: state.currentWiki.snipped, url: state.currentWiki.url },
  bookmarks: state.bookmarks,
})

const mapDispatchToProps = dispatch => ({
  updateCurrentImage: uri => dispatch(updateCurrentImage(uri)),
  clearImage: dispatch(clearImage),
  getWiki: landmark => dispatch(getWiki(landmark))
})
export default connect(mapStateToProps, mapDispatchToProps)(NavigationTab);


