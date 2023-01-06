import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


/**
 * 
 * @param {See imports, OnPress method for navigating} param0 
 * @returns Navigating Button
 */


export default function GetStarted({navigation}) {

  return (
    <View style={styles.block} >
        <Text style={styles.innerText} onPress={() => navigation.navigate("Location")} >Get Started</Text>  
    </View>
  )
}

/**
 * StyleSheet for the Get Started button component
 */

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'black',
        marginLeft: 15,
        marginRight: 15,
        padding: 5,
        alignItems: 'center',
        height: 50,
        
        
    },
    innerText: {
        color: "#fff",
        fontSize: 25,
    }
})