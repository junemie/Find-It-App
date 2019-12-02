import React from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { clearImage, getWiki } from '../../store/reducer';
import { Ionicons } from '@expo/vector-icons';

export class PhotoScreen extends React.Component {
  render() {
    const {
      imageUri,
      startOver,
      goToWikiResult,
    } = this.props;

    return (
      <View style={{ flex: 1 }}>

        <ImageBackground
          style={{ flex: 1, width: undefined, height: undefined }}
          resizeMode='cover'
          source={{ uri: imageUri }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent', position: 'absolute', right: 0, bottom: 0, left: 0 }} >
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', paddingLeft: 10 }}
            onPress={startOver}
          >
            <Ionicons name='md-close-circle' size={60} color='#cc0000' />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', paddingRight: 10 }}
            onPress={goToWikiResult}
          >
            <Ionicons name='ios-arrow-dropright-circle' size={60} color='#00ffcc' />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startOver: () => dispatch(clearImage()),
  getWiki: () => dispatch(getWiki())
});

export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(PhotoScreen)
);
