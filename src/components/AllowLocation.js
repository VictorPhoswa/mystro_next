import {  Linking, Platform, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {Permissions, Location} from 'expo';



/**
 * 
 * @param {See imports, OnPress method for navigating, Location allow} param0 
 * @returns Navigating Button
 */

export default function AllowLocation({navigation}) {

/**
 * This is a method used by expo to request user to allow locations
 */

/*  state = {
    location: null,
    errorMessage: null
  };

  componentWillMount(){

    if(Platform.OS == 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage:"Opps"
      });
    }else{
      this._getLocationAsync();
    }
  };

  _getLocationAsync = async () => {
    let {status} = await Permission.askAsync(Permission.Location);
    if(status != 'granted'){
      this.setState({
        errorMessage: 'Permission to access location denied'
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({location}); 
  };
  
  render(){
    let text = 'Wait..';
    if(this.state.errorMessage){
      text = this.state.errorMessage;
    }else{
      text = JSON.stringify(this.state.location);
    }
  }*/


  /**
   * This is a method used to allow user to grant location access
   * you need to evoke the permission flow function commented below
   * 
   */
  state = {
    status: null,
  };


  useEffect(() => {

    PermissionFlow = async () => {
      const {status} =  await Permissions.askAsync(Permissions.Location);
  
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
      
        <Text style={styles.innerText} onPress={() => navigation.navigate("Notifications")}>Allow While Using</Text>  
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