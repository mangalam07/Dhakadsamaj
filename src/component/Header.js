import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = ({navigation, MainHeading, Other, HideGoback}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.firstlayer}>
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
        <Text style={styles.mainhead}>{MainHeading ?? 'Home'}</Text>
        <Text />
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
    height: 130,
    backgroundColor: '#44ebd7',
    justifyContent: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingHorizontal: 14,
  },
  firstlayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIcon: {
    height: 30,
    width: 30,
    tintColor: '#000',
  },
  countlayer: {
    alignSelf: 'center',
    top: 10,
  },
  countfont: {
    fontSize: 20,
    fontWeight: '900',
    color: '#000',
  },
  mainhead: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
  },
});
