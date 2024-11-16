import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = ({navigation, MainHeading, Other, HideGoback}) => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {HideGoback ? (
          <></>
        ) : (
          <Image
            source={require('../assets/goBack.png')}
            style={styles.backIcon}
          />
        )}
      </TouchableOpacity>
      <View style={styles.firstlayer}>
        <Text style={styles.mainhead}>{MainHeading ?? 'Home'}</Text>
      </View>
      {Other ? (
        <View style={styles.countlayer}>
          <Text style={styles.countfont}>{Other}</Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Container: {
    height: 180,
    // backgroundColor: '#44ebd7',
    backgroundColor: '#FED9C1',
    justifyContent: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingHorizontal: 14,
  },
  firstlayer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    height: 32,
    width: 32,
    tintColor: '#444B47',
  },
  countlayer: {
    alignSelf: 'center',
    // top: 10,
  },
  countfont: {
    fontSize: 20,
    fontWeight: '900',
    color: '#444B47',
  },
  mainhead: {
    fontSize: 25,
    fontWeight: '700',
    color: '#444B47',
  },
});
