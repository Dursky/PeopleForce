import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/Button';
import {Header} from '../../components/Header';

export const Root = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.body}>
        <View style={styles.firstStage}>
          <Header
            mainText="KILKA SŁÓW O NAS"
            subText="CZYLI KIM JESTEMY I DOKAT ZMIERZAMY"
          />
          <View style={styles.descriptionPlacing}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
              porta magna. Curabitur ullamcorper pulvinar imperdiet. Maecenas
              condimentum sem aliquet, vulputate nisl id, maximus justo.
              Suspendisse venenatis tellus sed lorem bibendum euismod. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque blandit sem ex, in pulvinar risus
              tempor vel. Quisque vulputate odio malesuada pretium convallis.
              Nam semper velit at ipsum eleifend euismod.
            </Text>
          </View>
          <View style={styles.buttonPlacing}>
            <Button content="ZOBACZ WIĘCEJ" />
          </View>
        </View>
        <View style={styles.secondStage}>
          <Image
            source={require('assets/images/cat_first.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
          <Image
            source={require('assets/images/cat_third.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
          <Image
            source={require('assets/images/cat_third.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
          <Image
            source={require('assets/images/cat_fourth.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.thirdStage}>
          <ImageBackground
            resizeMode="cover"
            style={styles.backgroundImage}
            source={require('assets/images/blue_houses.webp')}>
            <Text style={styles.descriptionText}>
              BUDOWA DOMW Z DREWNA{'\n'}
              BUDOWA BRAM WJAZDOWYCH{'\n'}
              WYKOŃCZENIE WNĘTRZ{'\n'}
              ALTANY OGRODOWE{'\n'}
              KAMIENNE ELEMENETY ARCHUTEKTURY{'\n'}
              REMONTY
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.fourthStage}>
          <Header
            mainText="NASZA OFERTA"
            subText="DOWIEDZ SIĘ CO MOŻEMY TOBIE ZAOFEROWAĆ"
          />
          <View style={styles.descriptionPlacing}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
              porta magna. Curabitur ullamcorper pulvinar imperdiet. Maecenas
              condimentum sem aliquet, vulputate nisl id, maximus justo.
              Suspendisse venenatis tellus sed lorem bibendum euismod. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque blandit sem ex, in pulvinar risus
              tempor vel. Quisque vulputate odio malesuada pretium convallis.
              Nam semper velit at ipsum eleifend euismod.
            </Text>
          </View>
          <View style={styles.buttonPlacing}>
            <Button content="ZOBACZ WIĘCEJ" />
          </View>
        </View>
      </View>
    </ScrollView>
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
  scrollView: {
    width: '100%',
    height: '100%',
  },

  firstStage: {
    marginTop: 50,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  secondStage: {
    width: '100%',
    marginTop: 40,
  },
  image: {
    width: '100%',
    height: 200,

    marginTop: 10,
  },
  thirdStage: {
    width: '100%',
  },
  backgroundImage: {
    width: '100%',
    marginTop: 10,
    paddingTop: 50,
    paddingBottom: 40,
  },
  descriptionText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  fourthStage: {
    marginTop: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 50,
  },
});

export default Root;
