import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../component/Header';

const FamilyDetails = ({navigation, route}) => {
  const familyDescription = route?.params?.name;
  const surename = route?.params?.description?.surename;
  const totalfamilyMember = route?.params?.description?.totalfamilyMember;
  const familyMemberName = route?.params?.description?.nameOfFamilyMember;
  const contact = route?.params?.description?.contact;
  const occuption = route?.params?.description?.Occuption;
  const age = route?.params?.description?.Age;
  const profilePicture = route?.params?.description?.image;
  const address = route?.params?.description?.address;
  // console.log('route?.params', route?.params?.description?.image);
  return (
    <>
      <Header
        navigation={navigation}
        MainHeading={`${'Mr.'} ${familyDescription} ${
          surename ? surename : ''
        }`}
      />
      {route?.params?.description == undefined ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'red',fontSize: 30, fontWeight: '900'}}>Data Not Found</Text>
        </View>
      ) : (
        <>
          {/* profilePicture */}
          {!profilePicture ? (
            <Image
              source={require('../assets/profileImage.png')}
              style={styles.profile}
            />
          ) : (
            <Image
              source={route?.params?.description?.image}
              style={[styles.profile,{
                height: 290,
              }]}
            />
          )}
          {/* totalfamilyMember */}
          {!totalfamilyMember ? (
            <></>
          ) : (
            <View style={styles.totalMember}>
              <Text style={styles.totalMember_font}>
                Total Member In Family
              </Text>
              <Text style={styles.totalMember_font}>:</Text>
              <Text style={styles.totalMember_font}>{totalfamilyMember}</Text>
            </View>
          )}
          {/* contact */}
          {!contact ? (
            <></>
          ) : (
            <View style={styles.totalMember}>
              <Text style={styles.totalMember_font}>Contact</Text>
              <Text style={styles.totalMember_font}>:</Text>
              <Text style={styles.totalMember_font}>{contact}</Text>
            </View>
          )}
          {/* occuption */}
          {!occuption ? (
            <></>
          ) : (
            <View style={styles.totalMember}>
              <Text style={styles.totalMember_font}>Occupation</Text>
              <Text style={styles.totalMember_font}>:</Text>
              <Text style={styles.totalMember_font}>{occuption}</Text>
            </View>
          )}
          {/* age */}
          {!age ? (
            <></>
          ) : (
            <View style={styles.totalMember}>
              <Text style={styles.totalMember_font}>Age</Text>
              <Text style={styles.totalMember_font}>:</Text>
              <Text style={styles.totalMember_font}>{age}</Text>
            </View>
          )}
          {/* address */}
          {!address ? (
            <></>
          ) : (
            <View style={styles.totalMember}>
              <Text style={styles.totalMember_font}>Address</Text>
              <Text style={styles.totalMember_font}>:</Text>
              <Text style={styles.totalMember_font}>{address}</Text>
            </View>
          )}
          <ScrollView style={styles.familymemberlist}>
            {familyMemberName?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.memberContainer}
                  onPress={() => navigation.navigate('member@details', item)}>
                  <Text
                    style={
                      styles.memberFont
                    }>{`${item?.name} ${surename}`}</Text>
                  <Text style={styles.memberFont}>:</Text>
                  <Text style={styles.memberFont}>{item?.relation}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </>
      )}
    </>
  );
};

export default FamilyDetails;

const styles = StyleSheet.create({
  profile: {
    height: '32%',
    width: '100%',
    resizeMode: 'stretch',
  },
  totalMember: {
    marginVertical: 1,
    flexDirection: 'row',
    backgroundColor: '#89ABE3FF',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  totalMember_font: {
    fontSize: 19,
    fontWeight: '500',
    color: '#FCF6F5FF',
  },
  familymemberlist: {
    paddingHorizontal: 10,
    // paddingVertical: 50,
  },
  memberFont: {
    textAlign: 'justify',
    fontSize: 20,
    fontWeight: '500',
    color: '#00203FFF',
    // color: '#00539CFF',
  },
  memberContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
    paddingHorizontal: 10,
    height: 38,
  },
});
