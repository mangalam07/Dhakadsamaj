import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const SplashScreen = ({navigation}) => {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Sure@name');
    }, 1500);
  });

  return (
    <View style={styles.Container}>
      {/* <Text style={styles.icon_font}>DHAKAD SAMAAJ CHAPAKHEDA</Text> */}
      <Image
        style={styles.icon_val}
        source={require('../assets/SplashIcon.png')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon_val: {
    resizeMode:'center',
    height:200,
  },
  icon_font:{
    fontSize: 20,
    fontWeight: '900'
  }
});
