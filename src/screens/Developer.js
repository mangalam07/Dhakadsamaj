import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../component/Header';

const Developer = ({navigation, MainHeading}) => {
  return (
    <>
      <Header navigation={navigation} MainHeading={'Creator Space'} />
      <Image
        source={require('../assets/MemberProfile/Mangalam.png')}
        style={{
          height: 380,
          width: '100%',
          resizeMode: 'stretch',
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems:'flex-end',
          margin: 12,
        }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            fontStyle: 'italic',
            color: '#343aeb',
          }}>
          Created by Mangalam Dhakad
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            fontStyle: 'italic',
            color: '#3ad685',
          }}>
          Software Developer
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            fontStyle: 'italic',
            color: '#3ad685',
          }}>
          7089505044
        </Text>
      </View>
    </>
  );
};

export default Developer;

const styles = StyleSheet.create({});
