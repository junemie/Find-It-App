import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styled from 'styled-components';

const TITLE = 'Uh oh.';
const MESSAGE = 'Could not identify the image. Keep calm and try again.'

const Header = styled.Text`
  font-size: 26;
  font-weight: bold;
  color: white;
  margin-bottom: 20;
`

const Message = styled.Text`
  text-align: center;
  color: white;
  padding-left: 40;
  padding-right: 40;
`
const ErrorScreen = () => {

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/background2.png')}
        style={{ flex: 1 }}
      >
        <View style={{ alignItems: 'center', marginTop: 250 }}>
          <Header>{TITLE}</Header>
          <Message>{MESSAGE}</Message>
        </View>
      </ImageBackground>
    </View>
  );
}

export default ErrorScreen;
