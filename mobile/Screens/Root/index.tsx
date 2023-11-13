import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Root = () => {
  return (
    <View style={styles.body}>
      <Text>TEST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
});

export default Root;
