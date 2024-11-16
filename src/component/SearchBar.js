import {
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SearchBar = ({UserSearchName, Placeholder, onPress}) => {
  const handleTextSearch = item => {
    UserSearchName(item);
  };

  return (
    <View style={styles.Container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require('../assets/SearchIcon.png')}
            style={styles.searchicon}
          />
        </TouchableOpacity>
        <TextInput
          placeholder={Placeholder}
          style={styles.inputContainer}
          onChangeText={item => handleTextSearch(item)}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    width: Dimensions.get('screen').width / 1.25,
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#D0DAD8',
    borderRadius: 18,
    paddingHorizontal: 30,
    justifyContent: 'center',
    // marginVertical: 10,
    // width: '80%',
    // flexDirection: 'row',
    // alignItems: 'center',
  },

  inputContainer: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  searchicon: {
    height: 20,
    width: 20,
    resizeMode: 'center',
  },
});
