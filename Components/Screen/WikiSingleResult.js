import React from "react";
import { StyleSheet, Text, View } from 'react-native';

function WikiSingleResults() {
  return (
    <View style={styles.container}>
      <Text>Wiki single results</Text>
    </View>
  );
}

export default WikiSingleResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
