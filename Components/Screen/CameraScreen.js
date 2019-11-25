import React, { Component, useEffect } from "react";
import { View, AsyncStorage, Text, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from 'expo-camera';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const photos = [];
export default class CameraScreen extends Component {

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  async snapPhoto() {
    if (this.camera) {
      const options = { quantity: 1, base64: true, fixOrientation: true, exif: true }
      const photo = await this.camera.takePictureAsync(options);
      photos.push(photo);
    }
  }

  render() {

    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
                backgroundColor: "transparent",
              }}
            >
              <View>
                <MaterialCommunityIcons
                  onPress={this.snapPhoto}
                  name="circle-outline"
                  style={{ color: "white", fontSize: 100 }}
                />
              </View>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

