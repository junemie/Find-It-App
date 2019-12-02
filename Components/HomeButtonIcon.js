import React from 'react';
import { Button } from 'react-native-elements';
import Colors from '../constants/Colors';

export default HomeButtonIcon = (props) => {
  const { white } = Colors;

  return (
    <Button
      title={props.title}
      titleStyle={{ fontSize: 16, color: white, fontWeight: 'bold' }}
      type='outline'
      containerStyle={{ marginTop: 30 }}
      buttonStyle={{ width: 160, borderColor: white, borderWidth: 1 }}
      onPress={props.handleCamera}
    />
  )
};


