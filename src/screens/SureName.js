import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Header from '../component/Header';
import {AllSureName} from '../config';
import ListData from '../component/ListData';
import {TotalSureNameCount} from '../config';
import SearchBar from '../component/SearchBar';
import {useNavigation} from '@react-navigation/native';
const SureName = () => {
  let navigation = useNavigation();
  const [searchData, setSearchData] = useState([]);

  const receiveDataFromChild = data => {
    navigation.navigate('cast@details', data);
  };

  const UserSearch = data => {
    const filteredArray = AllSureName?.filter(item => {
      const itemName = item.name?.toLowerCase() || '';
      const searchStr = data.toLowerCase();

      return itemName.includes(searchStr);
    });
    setSearchData(filteredArray);
  };

  return (
    <>
      <Header
        HideGoback={true}
        MainHeading={'List of SubCast'}
        Other={TotalSureNameCount}
      />
      <SearchBar
        // onPress={()=> navigation.navigate('developer@details')}
        UserSearchName={UserSearch}
        Placeholder={'Find your SubCast here'}
      />
      <ScrollView style={{paddingHorizontal: 25}}>
        <ListData
          Data={searchData.length ? searchData : AllSureName}
          sendDataToParent={receiveDataFromChild}
          style={{justifyContent: 'space-between'}}
        />
      </ScrollView>
    </>
  );
};

export default SureName;

const styles = StyleSheet.create({});
