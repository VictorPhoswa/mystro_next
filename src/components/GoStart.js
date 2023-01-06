import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'


/**
 * 
 * @param {See imports, Toogle method, UseState Hooks} param0 
 * @returns Toogle Button status update
 */

export default function GoStart({navigation}) {

  const [Trip, setTrip] =  useState('STOP');
  const [Toogle, setToogle] =  useState(false);

/**
* This function handles the toogle buttons for the Go and Stop button
* 
*/
  function handleState(){
    setToogle(!Toogle)
    return Toogle ? setTrip("STOP") : setTrip("GO");
  }

  return (
    <View style={styles.block} >
        <Text style={styles.innerText} onPress={handleState} >{Trip}</Text>  
    </View>
  )
}


/**
 * StyleSheet for the Go/Stop button component
 */

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'orange',
        width: 80,
        height: 80,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    innerText: {
        color: "#fff",
        fontSize: 25,
    }
})