import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';


/**
 * The external components imports from componets folder
 */
import GetStarted from '../components/GetStarted';


/**
 * 
 * The welcome page components
 * The Page UI is created using <View/> with flex layout to devide
 * accordingly to fit all componets.
 * The componets are placed inside the view tags that are styled
 * 
 */

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.wrap}>
         
        <View style={styles.Header}>
            <Text style={styles.innerText}>Mystro</Text>
        </View>

        <View style={styles.body}>

            <View style={styles.LeftAside}>

                <View style={styles.money}>
                    
                </View>

                <View style={styles.car}>
                    
                </View>

                <View style={styles.thumb}>
                      
                </View>
            </View>

            <View style={styles.RightAside}>

                <View style={styles.money}>
                    <View style={styles.title}>
                        <Text style={styles.Title}>Earn More</Text>
                    </View>

                    <View style={styles.desc}>
                        <Text style={styles.descc}>Make up to twice as much per hour by dual-apping and filtering based on trip details.</Text>
                    </View>
                </View>

                <View style={styles.car}>
                    <View style={styles.title}>
                        <Text style={styles.Title}>Drive Safer</Text>
                    </View>

                    <View style={styles.desc}>
                        <Text style={styles.descc}>Mystro takes you online, display all rides, and pauses other services as needed.</Text>
                    </View>
                
                </View>

                <View style={styles.thumb}>
                    <View style={styles.title}>
                        <Text style={styles.Title} onPress={() => navigation.navigate("Location")}>No Hassle</Text>
                    </View>

                    <View style={styles.desc}>
                        <Text style={styles.descc}>Filter out bad rides based on pickup distance, trip distance, passanger rating, and more.</Text>
                    </View>
                
                </View>
                
            </View>

        </View>
            
         <View style={styles.footer} >
            <GetStarted navigation={navigation}/>
        </View>
      
    </View>
  )
}


/**
 * StyleSheet for the welcome Screen
 */
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    Header: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    body: {
        flex: 2,
        flexDirection: 'row',
        marginRight: 15,
        
    },
    LeftAside: {
        flex: 1,
        
    },
    RightAside: {
        flex: 2,
    },
    car: {
        flex: 1,
        
    },
    money: {
        flex: 1,
        
    },
    thumb: {
        flex: 1,
        
    },
    title: {
        flex: 1,
    },
    desc: {
        flex: 4,

    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
    },
    descc: {
        fontSize: 17,
        
    },
    footer: {
        flex: 0.7,
        justifyContent: 'center',
    },
    innerText: {
        fontSize: 40,
    },
    

});