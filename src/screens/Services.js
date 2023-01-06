import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants';



/**
 * The external components imports from componets folder
 */
import Next from '../components/Next';


/**
 * 
 * @param {See imports for parameters, Toogle method to update selection} param0 
 * @returns Services screen
 */

export default function Services({navigation}) {

    /**
     * The Use states constants used to update the  services toogle buttons
     */
    const [BdUber, setUber] = useState('black');
    const [BdLfty, setLfty] = useState('black');
    const [Toogle, setToogle] = useState(false);

    /**
     * This function handles the toogle buttons for Lyfty and Uber services
     */
    function ToogleStatus(Var){

        if(Var == 'Uber'){
            setToogle(!Toogle);
            return Toogle ? setUber('black') : setUber('green');
        }
        else{
            setToogle(!Toogle);
            return Toogle ? setLfty('black') : setLfty('green');
        }
        
    }

  return (

    <View style={styles.wrap}>
      <View style={styles.Header}>
        <Text style={styles.services}>Which services do you use?</Text>
      </View>
      <View style={styles.body}>

        <View style={styles.LeftAside}>

            <View style={[styles.Uber, {borderColor: BdUber}]} >
                <Text style={styles.inneText} onPress={() => ToogleStatus('Uber')}>Lyft</Text>
            </View>

            <View style={styles.Post}>
                <Text style={styles.inneText}>Doordash</Text>
                <Text>Coming Soon!</Text>
            </View>
        </View>

        <View style={styles.RightAside}>
            <View style={[styles.Uber, {borderColor: BdLfty}]} >
                <Text style={styles.inneText} onPress={() => ToogleStatus('Lfty')}>Uber</Text>
            </View>

            <View style={styles.Post}>
                <Text style={styles.inneText} >Postmates</Text>
                <Text>Coming Soon!</Text>
            </View>
        </View>

      </View>
      <View style={styles.footer}>
        <Next navigation={navigation}/>
      </View>
    </View>
  )
}



/**
 * StyleSheet for the Services Screen
 */

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: Constants.statusBarHeight,
        
    },
    body: {
        flex: 2,
        flexDirection: 'row',
        //alignItems: 'center',
        //justifyContent: 'center',
        //alignContent: 'center',
        
    },
    footer: {
        flex: 0.7,
        justifyContent: 'center',
    },
    LeftAside: {
        flex: 1,
    },
    RightAside: {
        flex: 1,
    },
    Uber: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        margin: 20,
        borderWidth: 2,
        borderRadius: 10,
    },
    Post: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        margin: 20,
        borderWidth: 2,
        borderRadius: 10,
        
    },
    inneText: {
        fontSize: 20,
    },
    services: {
        fontSize: 35,
    },
    foo: {
        fontSize: 50,
    },
})