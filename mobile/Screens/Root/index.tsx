import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import {Header} from '../../components/Header';

export const Root = () => {
  return (
    <View style={styles.body}>
      <Header
        mainText="KILKA SŁÓW O NAS"
        subText="CZYLI KIM JESTEMY I DOKAT ZMIERZAMY"
      />
      <View style={styles.descriptionPlacing}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
          porta magna. Curabitur ullamcorper pulvinar imperdiet. Maecenas
          condimentum sem aliquet, vulputate nisl id, maximus justo. Suspendisse
          venenatis tellus sed lorem bibendum euismod. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Pellentesque blandit sem ex, in pulvinar risus tempor vel. Quisque
          vulputate odio malesuada pretium convallis. Nam semper velit at ipsum
          eleifend euismod.
        </Text>
      </View>
      <View style={styles.buttonPlacing}>
        <Button content="ZOBACZ WIĘCEJ" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 80,
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
  description: {
    textAlign: 'center',
  },
  descriptionPlacing: {
    marginTop: 30,
  },
  buttonPlacing: {
    marginTop: 50,
  },
});

export default Root;
