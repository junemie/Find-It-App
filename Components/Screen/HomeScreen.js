import React from "react";
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import styled from 'styled-components';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import * as ImagePicker from 'expo-image-picker';
import CameraScreen from './CameraScreen';
import HomeButtonIcon from '../HomeButtonIcon';
// import { ImagePicker, Permissions } from 'expo'

const Container = styled.View`
  flex: 1;
  alignItems: center;
  margin-top: 200px;
`
const Header = styled.Text`
  font-size: 26;
  font-weight: bold;
  color: white;
  margin-bottom: 20;
`
const Title = styled.Text`
  font-size: 15;
  color: white;
`
const HEADER_LABEL = "FIND IT APP"
const TITLE_LABEL = "Select options to start your search"

class HomeScreen extends React.Component {


  // handleCamera = async () => {
  //   const { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
  //     allowsEditing: true,
  //     base64: true
  //   })
  // }
  handleCamera = () => {
    this.props.navigation.navigate("Camera");
  }

  handlePickPhoto = () => {
    console.log("pick a photo");
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.container}
      >
        <Container>
          <Header>{HEADER_LABEL}</Header>
          <Title>{TITLE_LABEL}</Title>
          <HomeButtonIcon
            title="CAMERA"
            handleCamera={this.handleCamera}
          />
          <HomeButtonIcon
            title="PHOTO"
            handleCamera={this.handlePickPhoto}
          />
        </Container>
      </ImageBackground>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
