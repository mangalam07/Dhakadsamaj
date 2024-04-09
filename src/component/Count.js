import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Count = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Count</Text>
    </View>
  )
}

export default Count

const styles = StyleSheet.create({
    container: {
        margin:10,
        backgroundColor: 'red',
        width: 90,
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        // alignSelf:'flex-end',
        borderRadius: 8,
        marginRight: 10
    },
    heading: {
        fontSize: 19,
        fontWeight:'500',
        color:'#000'
    }
})