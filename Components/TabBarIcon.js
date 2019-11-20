import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../constants/Colors'

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon
        name={this.props.name}
        size={24}
        color={this.props.focused ? Colors.selected : Colors.default}
      />
    )
  }
}
