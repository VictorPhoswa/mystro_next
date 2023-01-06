import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



/**
 * The external components imports from componets folder
 */
import AllowLocation from '../components/AllowLocation'


/**
 * 
 * @param {See Imports parameters used in the page, } param0 
 * @returns Location Screen 
 */

export default function LocationPermission({navigation}) {
  return (
    <View style={styles.wrap}>
        <View style={styles.Top}></View>


        <View style={styles.Bottom}>

            <View style={styles.Msg}>
                <Text style={styles.location} >Location</Text>
                <Text style={styles.Msgg}>Mystro needs your location to match </Text>
                <Text style={styles.Msgg}>you with nearby offers, even while in the</Text>
                <Text style={styles.Msgg}>background</Text>

            </View>

            <View style={styles.footer}>
                <AllowLocation navigation={navigation}/>
            </View>
        </View>
    </View>
  )
}



/**
 * StyleSheet for the Locations Screen
 */


const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Top:{
        flex: 7,
    },
    Bottom:{
        flex:4,
    },
    footer: {
        flex: 1,
    },
    Msg: {
        flex: 2,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Msgg: {
        fontSize: 17,
        color: 'gray',
    },
    location: {
        fontSize: 25,
        fontWeight: 'bold',
    }
})