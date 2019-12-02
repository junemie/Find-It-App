import React from "react";
import { StyleSheet, View, Text, Dimensions, WebView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const TITLE = 'Wiki';
const MESSAGE = 'Select an image to start to see your results!'

const Header = styled.Text`
  font-size: 26;
  font-weight: bold;
  color: white;
  margin-bottom: 20;
`;

const Message = styled.Text`
  font-size: 15;
  color: white;
`;

export const WikiResultScreen = (props) => {

  return (
    <View style={{ flex: 1 }}>
      {props.wiki.url ?
        <WebView
          startInLoadingState={true}
          source={{ uri: props.wiki.url }}
          useWebKit={true}
        />
        :
        <ImageBackground
          source={require('../../assets/background.png')}
          style={{ flex: 1 }}
        >
          <View style={{ alignItems: 'center', marginTop: 210 }}>
            <Header>{TITLE}</Header>
            <Message>{MESSAGE}</Message>
          </View>
        </ImageBackground>
      }
    </View>
  );
};

const mapStateToProps = state => ({
  wiki: state.currentWiki,
  image: state.currentImage
});

export default connect(mapStateToProps)(WikiResultScreen);
