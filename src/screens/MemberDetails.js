import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../component/Header';

const MemberDetails = ({navigation, route}) => {
  const name = route?.params?.name;
  const profilePicture = route?.params?.image;
  const age = route?.params?.Age;
  const contact = route?.params?.Contact;
  const occuption = route?.params?.Occuption;
  const subcast = route?.params?.SubCast;
  const motherVillage = route?.params?.motherVillage;

  return (
    <>
      <Header navigation={navigation} MainHeading={name} />
      <View style={{flex: 1, paddingHorizontal: 10}}>
        {/* profilepicture */}
        {!profilePicture ? (
          <Image
            source={require('../assets/profileImage.png')}
            style={styles.profile}
          />
        ) : (
          <Image
            source={profilePicture}
            style={styles.profile}
          />
        )}

        <View style={styles.detailsContainer}>
          {/* Age */}
          {!age ? (
            <></>
          ) : (
            <View style={styles.detailslayout}>
              <Text style={styles.layout_font}>Age</Text>
              <Text style={styles.layout_font}>{age}</Text>
            </View>
          )}
          {/* contact */}
          {!contact ? (
            <></>
          ) : (
            <View style={styles.detailslayout}>
              <Text style={styles.layout_font}>Contact</Text>
              <Text style={styles.layout_font}>{contact}</Text>
            </View>
          )}
          {/* occuption */}
          {!occuption ? (
            <></>
          ) : (
            <View style={styles.detailslayout}>
              <Text style={styles.layout_font}>Occuption</Text>
              <Text style={styles.layout_font}>{occuption}</Text>
            </View>
          )}
          {/* subcast */}
          {!subcast ? (
            <></>
          ) : (
            <View style={styles.detailslayout}>
              <Text style={styles.layout_font}>Parent Subcast</Text>
              <Text style={styles.layout_font}>{subcast}</Text>
            </View>
          )}
          {!motherVillage ? (
            <></>
          ) : (
            <View style={styles.detailslayout}>
              <Text style={styles.layout_font}>Mother's Village</Text>
              <Text style={styles.layout_font}>{motherVillage}</Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default MemberDetails;

const styles = StyleSheet.create({
  profile: {
    height: '40%',
    width: '100%',
    resizeMode: 'stretch',
    marginBottom:10
  },
  layout_font: {
    fontSize: 20,
    fontWeight: '500',
    color: '#00203FFF',
  },
  detailsContainer: {
    height: '50%',
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#000',
    padding: 15,
    borderRadius: 10,
    borderColor: '#00203FFF'
  },
  detailslayout: {
    flexDirection: 'row',
    // backgroundColor:'yellow',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});
