import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

export default TabBarIcon = (props) => {
  const { defaultColor, selected } = Colors;

  return (
    <Icon
      name={props.name}
      size={24}
      color={props.focused ? selected : defaultColor}
    />
  )
}
