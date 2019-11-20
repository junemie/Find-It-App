import React from "react";
import { StyleSheet, Text, View } from 'react-native';

function WikiResults() {
  return (
    <View style={styles.container}>
      <Text>Wiki results</Text>
    </View>
  );
}

export default WikiResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
