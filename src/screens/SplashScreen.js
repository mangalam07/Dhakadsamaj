import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Sure@name');
    }, 1500);
  });

  return (
    <View style={styles.Container}>
      {/* <Text style={styles.icon_font}>DHAKAD SAMAAJ CHAPAKHEDA</Text> */}
      <View
        style={{
          flex: 0.8,
          alignItems: 'center',
        }}>
        <Image
          style={[styles.icon_val, {top: 130}]}
          source={require('../assets/SplashIcon.png')}
        />
      </View>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
          paddingHorizontal: 35,
        }}>
        <Text style={styles.fonts}>Share.</Text>
        <Text style={styles.fonts}>Your.</Text>
        <Text style={styles.fonts}>Things.</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 10,
  },
  icon_val: {
    resizeMode: 'center',
    // height: 200,
  },
  icon_font: {
    fontSize: 20,
    fontWeight: '900',
  },
  fonts: {
    fontSize: 30,
    fontWeight: '500',
    // color: '#000',
  },
});
