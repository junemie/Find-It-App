import React from 'react';
import { Button } from 'react-native-elements';
import Colors from '../constants/Colors'

export default HomeButtonIcon = (props) => {
  const { lightBlue } = Colors;

  return (
    <Button
      title={props.title}
      titleStyle={{ fontSize: 16, color: lightBlue }}
      type="outline"
      containerStyle={{ marginTop: 30 }}
      buttonStyle={{ width: 160, borderColor: lightBlue }}
      onPress={props.handleCamera}
    />
  )
}
