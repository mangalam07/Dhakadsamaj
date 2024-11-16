import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const ListData = ({
  Data,
  sendDataToParent,
  countHidden,
  style,
  sendarrLength,
}) => {
  const sendDataToParentHandler = item => {
    sendDataToParent(item);
  };

  // const sendLength = item => {
  //   sendarrLength(item.length)
  //   console.log('-=-=-=-=',item.length)
  // }

  return (
    <View>
      {Data?.map((item, index, arrlength) => {
        // console.log('DATA_LENGTH', arrlength?.length);
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            style={[styles.listView, style]}
            onPress={() => sendDataToParentHandler(item)}>
            {!countHidden ? (
              <View style={styles.countbox}>
                <Text style={styles.listfonts}>{item?.total}</Text>
              </View>
            ) : (
              <></>
            )}
            {countHidden ? (
              <Text style={styles.listfonts}>{item?.name}</Text>
            ) : (
              <Text style={styles.listfonts}>{`${
                item?.name
              } ${'Family'}`}</Text>
            )}
            <Text />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ListData;

const styles = StyleSheet.create({
  listView: {
    flexDirection: 'row',
    marginVertical: 15,
    paddingHorizontal: 8,
    height: 65,
    backgroundColor: '#C0C0FE',
    borderRadius: 8,
    elevation: 5,
    // backgroundColor: '#07e36a',
    // paddingHorizontal: 15,
    // // justifyContent: 'center',
    // shadowColor: 'blue',
    // shadowOpacity: 10,
    // // shadowOffset: {width: 2, height: 2},
    // // shadowRadius: 9,
    // opacity: 10,
  },
  listfonts: {
    fontSize: 25,
    fontWeight: '700',
    color: '#0B2D99',
    alignSelf: 'center',
  },
  countbox: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: '#FFF',
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
  },
});
