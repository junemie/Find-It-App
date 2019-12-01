import React from "react";
import {
  Text,
  View,
  Linking,
  Button
} from 'react-native';
import { connect } from 'react-redux';


export const  WikiResult = props => {
  console.log('right here', props, this.props)
  const { wiki, image ,navigation } = props;
  const title = navigation.getParam('landmark', 'default');
  const parsedWiki = wiki.snippet.replace(/<[^>]*>/g, '');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{title}</Text>
    <Text style={{ margin: 20, fontSize: 15, textAlign: 'center' }}>
      {parsedWiki}...
    </Text>
    <Text />
    <Button
      title="Continue reading on Wikipedia"
      onPress={() => {
        Linking.openURL(wiki.url)
      }}
    />
    <Button
      title="View more images on Google"
      onPress={() => {
        Linking.openURL(`https://www.google.com/search?tbm=isch&q=${title}`)
      }}
    />
    <Button
      title="Save To Bookmarks"
      onPress={() => save({ title: title, image: image, wiki: parsedWiki })}
    />
  </View>
  )

}

const mapStateToProps = state => ({
  wiki: state.currentWiki,
  image: state.currentImage
})

export default connect(mapStateToProps)(WikiResult);


