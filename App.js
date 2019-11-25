import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Provider } from 'react-redux'
import { AppLoading } from 'expo';
import * as  Font from 'expo-font';
import { Asset } from 'expo-asset';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationTab from './Components/Navigation/NavigationTab';
import styled from 'styled-components';
import store from './store/index';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default class App extends React.Component {
  state = {
    isLoading: false
  }

  static propTypes = {
    isLoading: PropTypes.bool
  }

  static defaultPorps = {
    isLoading: false
  }

  handleLoadAssets = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/rocket.png'),
        require('./assets/rocket-prod.png'),
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
      }),
    ]);
  };

  handleLoadError = error => {
    console.warn(error);
  };

  handleLoadFinished = () => {
    this.setState({ isLoading: true });
  };

  render() {
    !this.state.isLoading &&
      <AppLoading
        startAsync={this.handleLoadAssets}
        onFinish={this.handleLoadError}
        onError={this.handleLoadFinished}
      />

    return (
      <Provider store={store}>
        <Container>
          <NavigationTab></NavigationTab>
        </Container >
      </Provider>
    )
  }
}

