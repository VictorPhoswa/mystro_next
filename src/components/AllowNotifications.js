import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {Notifications, Permissions} from 'expo';


/**
 * 
 * @param {See imports, OnPress method for navigating} param0 
 * @returns Navigating Button
 */

export default function AllowNotifications({navigation}) {

  state = {
    status: null,
  };

/**
   * This is a method used to allow user to grant Notification access
   * you need to evoke the permission flow function commented below
   * 
*/

  useEffect(() => {

    PermissionFlow = async () => {
      const {status} =  await Permissions.askAsync(Permissions.Notifications);
  
      this.setState({status});
  
      if(status !== 'granted'){
        Linking.openURL('app-settings');
        return;
      }
    }
    //evekoke permission here
    //PermissionFlow();
  });

  return (
    <View style={styles.block}>
        <Text style={styles.innerText} onPress={() => navigation.navigate("Services")}>Allow Notifications</Text>  
    </View>
  )
}


/**
 * StyleSheet for the Get Allow Notifications button component
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