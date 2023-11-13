import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AnimatedButton} from '../AnimatedButton';

interface props {
  content: string;
  onPress?: () => void;
}

export const Button = ({content, onPress}: props) => {
  return (
    <AnimatedButton onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{content}</Text>
      </View>
    </AnimatedButton>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  button: {
    borderColor: '#7CB9E8',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 5,
    height: 50,
    width: 150,
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#7CB9E8',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default Button;
