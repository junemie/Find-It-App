import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as  Font from 'expo-font';
import { Asset } from 'expo-asset';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import store from './store/index';
import NavigationTab from './components/Navigation/NavigationTab';

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
        require('./assets/background.png'),
        require('./assets/background2.png'),
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
          <NavigationTab />
        </Container >
      </Provider>
    )
  }
}
