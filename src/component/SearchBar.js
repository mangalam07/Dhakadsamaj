import {
  Image,
  StyleSheet,
  Text,
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
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  Container: {
    marginVertical: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#c0eded',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 60,
    paddingHorizontal: 30,
  },

  inputContainer: {
    paddingHorizontal: 10,
    fontSize: 19,
    fontWeight: '400',
  },
  searchicon: {
    height: 32,
    width: 32,
    resizeMode: 'center',
  },
});
