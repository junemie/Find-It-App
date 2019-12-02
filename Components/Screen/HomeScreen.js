import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styled from 'styled-components';
import * as ImagePicker from 'expo-image-picker';
import PropTypes from 'prop-types';
import PhotoScreen from './PhotoScreen';
import * as Permissions from 'expo-permissions';
import Enviroment from '../../config/environment';
import HomeButtonIcon from '../HomeButtonIcon';
import LoadingScreen from './LoadingScreen';


const Container = styled.View`
  flex: 1;
  alignItems: center;
  margin-top: 200px;
`;

const Header = styled.Text`
  font-size: 26;
  font-weight: bold;
  color: white;
  margin-bottom: 20;
`;

const Title = styled.Text`
  font-size: 15;
  color: white;
`;

const HEADER_LABEL = 'FIND IT APP';
const TITLE_LABEL = 'Select options to start your search';

export class HomeScreen extends React.Component {

  state = {
    status: null,
    results: null,
    landmark: ''
  }

  static propTypes = {
    status: PropTypes.bool,
    results: PropTypes.bool
  }

  static defaultProps = {
    status: null,
    results: null,
  }

  handleCamera = async () => {
    const { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      base64: true
    });

    if (!cancelled) {
      this.props.screenProps.updateCurrentImage(uri);
      this.handleImagePicked(base64);
    }

  };

  handlePickPhoto = async () => {
    const { cancelled, uri, base64 } = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true
    });

    const { updateCurrentImage } = this.props.screenProps;

    if (!cancelled) {
      updateCurrentImage(uri);
      this.handleImagePicked(base64);
    }
  }

  handleImagePicked = async base64 => {
    try {
      const body = {
        requests: [
          {
            image: { content: base64 },
            features: [
              { type: 'LANDMARK_DETECTION', maxResults: 10 }
            ]
          }
        ]
      };

      const key = Enviroment.GOOGLE_CLOUD_VISION_API_KEY;

      const response = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${key}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }
      )

      const { responses } = await response.json();
      const landmark = responses[0].landmarkAnnotations[0].description;

      if (landmark) {
        this.setState({
          landmark: landmark
        });
        this.setState({
          status: 'Retrieved'
        });
      } else {
        this.setState({
          status: 'Error'
        });
      }
    } catch (error) {
      this.setState({
        status: 'Error'
      });
    }
  }

  goToWikiResult = async () => {
    let { getWiki, currentWiki } = this.props.screenProps;
    let { landmark, status } = this.state;

    if (status === 'Error' || landmark === undefined) {
      this.props.navigation.navigate('ErrorScreen');
    } else {
      this.setState({
        status: 'Analyzing...'
      });

      await getWiki(landmark);

      if (currentWiki) {
        this.setState({
          status: 'Retrieved'
        });
        this.props.navigation.navigate('WikiResultScreen', {
          landmarkName: landmark
        });
      }

    }
  }

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);
  }

  handleLoading = () => {
    if (this.state.status === 'Analyzing...') {
      return (
        <LoadingScreen
          status={this.state.status}
        />
      );
    }
  }

  render() {
    let { currentImage, clearImage } = this.props.screenProps;

    return (
      <View style={{ flex: 1 }}>
        {currentImage ? (
          <PhotoScreen
            {...this.state}
            imageUri={currentImage}
            clearImage={clearImage}
            goToWikiResult={this.goToWikiResult}
          />
        ) :
          <ImageBackground
            source={require('../../assets/background.png')}
            style={{ flex: 1 }}
          >
            <Container>
              <Header>{HEADER_LABEL}</Header>
              <Title>{TITLE_LABEL}</Title>
              <HomeButtonIcon
                title='CAMERA'
                handleCamera={this.handleCamera}
              />
              <HomeButtonIcon
                title='PHOTO'
                handleCamera={this.handlePickPhoto}
              />
            </Container>
          </ImageBackground>
        }
        {this.handleLoading()}
      </View>
    );
  }
}

