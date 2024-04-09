import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../component/Header';
import ListData from '../component/ListData';
import {
  SagitraFamily,
  MehtaFamily,
  GargamaFamily,
  DhodhariyaFamily,
  AilyaFamily,
  PapondiyaFamily,
  NanderaFamily,
  SekwadiyaFamily,
  AtoliyaFamily,
  GajiFamily,
  BamboriyaFamily,
  AloliyaFamily,
  HarraFamily,
  VarvaniyaFamily,
  NaymaFamily,
  VaktariyaFamily,
  KhamoriyaFamily,
} from '../config';
import SearchBar from '../component/SearchBar';

const CastDetails = ({navigation, route}) => {
  const SureName = route?.params?.name;
  const Total = route?.params?.total;

  const [searchName, setSearchName] = useState([]);

  console.log('SureName', SureName);
  const selectData =
    SureName == 'Sagitra'
      ? SagitraFamily
      : SureName == 'Mehta'
      ? MehtaFamily
      : SureName == 'Gargama'
      ? GargamaFamily
      : SureName == 'Dhodhariya'
      ? DhodhariyaFamily
      : SureName == 'Ailya'
      ? AilyaFamily
      : SureName == 'Nayma'
      ? NaymaFamily
      : SureName == 'Vaktariya'
      ? VaktariyaFamily
      : SureName == 'Papondiya'
      ? PapondiyaFamily
      : SureName == 'Khamoriya'
      ? KhamoriyaFamily
      : SureName == 'Varvaniya'
      ? VarvaniyaFamily
      : SureName == 'Nandera'
      ? NanderaFamily
      : SureName == 'Sekwadiya'
      ? SekwadiyaFamily
      : SureName == 'Aloliya'
      ? AloliyaFamily
      : SureName == 'Gaji'
      ? GajiFamily
      : SureName == 'Bamboriya'
      ? BamboriyaFamily
      : SureName == 'Atoliya'
      ? AtoliyaFamily
      : SureName == 'Harra'
      ? HarraFamily
      : [];

  console.log('selectData', selectData?.length);

  const receiveDataFromChild = data => {
    navigation.navigate('family@details', data);
  };

  const UserSearch = data => {
    const filteredArray = selectData?.filter(item => {
      const itemName = item.name?.toLowerCase() || '';
      const searchStr = data.toLowerCase();

      return itemName.includes(searchStr);
    });
    setSearchName(filteredArray);
  };

  return (
    <>
      <Header
        Other={Total}
        navigation={navigation}
        MainHeading={`${SureName} ${'Family'}`}
      />
      <SearchBar
        onPress={()=> navigation.navigate('developer@details')}
        UserSearchName={UserSearch}
        Placeholder={'Find your Name here'}
      />

      {selectData?.length >= 1 ? (
        <ScrollView style={{paddingHorizontal: 25}}>
          <ListData
            style={{justifyContent: 'center'}}
            countHidden={true}
            Data={searchName.length ? searchName : selectData}
            sendDataToParent={receiveDataFromChild}
          />
        </ScrollView>
      ) : (
        <View style={styles.warningcontainer}>
          <Text style={styles.warningfont}>Data Not Found</Text>
        </View>
      )}
    </>
  );
};

export default CastDetails;

const styles = StyleSheet.create({
  warningcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningfont: {
    color: 'red',
    fontSize: 30,
    fontWeight: '900',
  },
});
