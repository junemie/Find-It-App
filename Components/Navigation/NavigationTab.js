import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TabBarIcon from '../TabBarIcon';
import { HomeScreen, WikiResultScreen, PhotoScreen, ErrorScreen } from '../Screen';
import Colors from '../../constants/Colors';
import { connect } from 'react-redux';
import { updateCurrentImage, clearImage, getWiki } from '../../store/reducer';

const HomeBar = createStackNavigator({
  HomeScreen,
  PhotoScreen,
  ErrorScreen,
});

HomeBar.navigationOptions = ({
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='ios-home'
    />
  ),
  tabBarOptions: { activeTintColor: 'black' }
});

const Web = createStackNavigator({
  WikiResultScreen
});

Web.navigationOptions = ({
  tabBarLabel: 'Wiki',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-keypad'
    />
  ),
  tabBarOptions: { activeTintColor: 'black' }
});


const BottomTab = createBottomTabNavigator({
  HomeBar,
  Web,
}, {
    activeTintColor: Colors.selected
  });

const NavigationContainer = createAppContainer(BottomTab);

const NavigationTab = props => {
  return (
    <NavigationContainer screenProps={props} />
  );
};

const mapStateToProps = state => ({
  currentImage: state.currentImage,
  currentWiki: { snipped: state.currentWiki.snipped, url: state.currentWiki.url }
});

const mapDispatchToProps = dispatch => ({
  updateCurrentImage: uri => dispatch(updateCurrentImage(uri)),
  clearImage: dispatch(clearImage),
  getWiki: landmark => dispatch(getWiki(landmark))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTab);
