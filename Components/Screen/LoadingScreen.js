import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

const LoadingScreen = (props) => (
  <View
    style={[
      StyleSheet.absoluteFill,
      {
        backgroundColor: 'rgba(0,0,0,0.4)',
        alignItems: 'center',
        justifyContent: 'center'
      }
    ]}
  >
    <ActivityIndicator color="#fff" animating size="large" />
    <Text style={StyleSheet.status}>{props.status}</Text>
  </View>
);

StyleSheet.create({
  status: {
    fontSize: 17,
    color: 'rgba(255,255,255, 1)',
    lineHeight: 24,
    textAlign: 'center'
  }
});

export default LoadingScreen;
