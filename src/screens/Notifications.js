import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



/**
 * The external components imports from componets folder
 */
import AllowNotifications from '../components/AllowNotifications'


/**
 * 
 * @param {See Imports parameters used in the page, } param0 
 * @returns Notification Screen 
 */

export default function Notifications({navigation}) {
  return (
    <View style={styles.wrap}>
        <View style={styles.Top}></View>


        <View style={styles.Bottom}>

            <View style={styles.Msg}>
                <Text style={styles.location} >Notifications</Text>
                <Text style={styles.Msgg}>Mystro needs notifications to alert you </Text>
                <Text style={styles.Msgg}>about incoming requests</Text>

            </View>

            <View style={styles.footer}>
                <AllowNotifications navigation={navigation}/>
            </View>
        </View>
    </View>
  )
}



/**
 * StyleSheet for the Notification Screen
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