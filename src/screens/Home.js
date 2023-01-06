import React from 'react'
import Constants from 'expo-constants';
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';



/**
 * The external components imports from componets folder
 */
import GoStart from '../components/GoStart';
import UberRedirect from '../components/UberRedirect';


//     /**
//      * This is method used to request to login the uber website
//      * Tequest for Authentication Token
//      * The token will be used to request data from the Uber site
//      * The service configuration is refered to as end point configuration 
//      * 
//      */
// const request =  async () => {

//     // const config = {
//     //     clientId: 'iz6KSgbKi7EADQybtjMR-P8MeCNMPBi-',
//     //     clientSecret: 'eHLrexA3o-Moul6rHgQcBmC10ZNM70oQbLk4JntE',
//     //     redirectUrl: 'mystro.app://Home',
//     //     scopes: ['profile', 'delivery'], 

//     //     serviceConfiguration: {
//     //       authorizationEndpoint: 'https://login.uber.com/oauth/v2/authorize',
//     //       tokenEndpoint: 'https://login.uber.com/oauth/v2/token',
//     //       revocationEndpoint: 'https://login.uber.com/oauth/v2/revoke'
//     //     }
//     //   };


//       try {
        
//         // result includes accessToken, accessTokenExpirationDate and refreshToken
//         const result = await authorize(config);
        
//       } catch (error) {
//         console.log(error);
//       }
      
//       // Log in to get an authentication token
//       //const authState = await authorize(config);
//       //authState;
//   };



/**
 * 
 * @param {See Imports parameters used in the page} param0 
 * @returns Home Screen page
 */


export default function Home({navigation}) {

  return (
    <View style={styles.wrap}>
        <View style={styles.header}>

            <View style={styles.Settings}>

                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Image 
                    source={require('../icons/settings.png')}
                    style={{width: 25, height: 25, }}
                    
                />
                </TouchableOpacity>
                
            </View>

            <View style={styles.Logo}>
                <Text style={{fontSize: 20,}} >Mystro</Text>
            </View>

            <View style={styles.Info}>
                <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                <Image 
                    source={require('../icons/info.png')}
                    style={{width: 25, height: 25, }}
                />
                </TouchableOpacity>
            </View>

        </View>
        <View style={styles.nav}>
            <View style={styles.lyft}>
                <View style={styles.status}>
                    <Image 
                        source={require('../icons/circle.png')}
                        style={{width: 25, height: 25,}}
                    />
                </View>

                <View style={styles.descc}>
                    <Text style={styles.Prod}>Lyft-Disconnected</Text>
                    <Text style={styles.sta}>Connect to Lyft by tapping the arrow</Text>
                </View>

                <View style={styles.link}>
                    <TouchableOpacity>
                    <Image 
                        source={require('../icons/arrow.png')}
                        style={{width: 20, height: 20,  tintColor: '#D23369',}}
                        
                    />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.uber}>

                <View style={styles.status}>
                    <Image 
                        source={require('../icons/circle.png')}
                        style={{width: 25, height: 25,}}
                    />
                </View>

                <View style={styles.descc}>
                    <Text style={styles.Prod}>Uber-Disconnected</Text>
                    <Text style={styles.sta}>Connect to Uber by tapping the arrow</Text>
                </View>

                <View style={styles.link}>
                    <UberRedirect/>
                </View>
                
            </View>

            <View style={styles.blank}>
                <View style={styles.customise}></View>
                <View style={styles.btnn}>
                    <GoStart/>
                </View>
            </View>
        </View>
        
    </View>
  )
}



/**
 * StyleSheet for the Home Screen
 */

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
       
    },
    nav: {
        flex: 10,
        
    },
    Settings: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    Logo: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    Info: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    lyft: {
        flex: 2,
        flexDirection: 'row',
        
    },
    uber: {
        flex: 2,
        flexDirection: 'row',
        
    },
    blank: {
        flex: 16,
    },
    status: {
        flex: 2,
        alignItems: 'center',
    },
    descc: {
        flex: 6,
    },
    link: {
        flex: 2,
        //alignItems: 'center',
    },
    sta: {
        color: 'gray',
        fontSize: 10,
    },
    Prod: {
        fontSize: 20,
    },
    customise: {
        flex: 2,
        marginLeft: 15,
        marginRight: 15,
    },
    btnn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})