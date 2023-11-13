import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface props {
  mainText: string;
  subText: string;
}
export const Header = ({mainText, subText}: props) => {
  return (
    <View style={styles.body}>
      <Text style={styles.mainText}>{mainText}</Text>
      <Text style={styles.subText}>{subText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  mainText: {
    fontSize: 25,
    color: 'black',
    fontWeight: '700',
  },
  subText: {
    fontSize: 15,
    color: '#7CB9E8',
    fontWeight: '500',
  },
});
