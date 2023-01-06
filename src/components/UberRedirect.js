import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button , StyleSheet, View, Image } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

WebBrowser.maybeCompleteAuthSession();

/**
 * This is an endpoint configuration for the Uber  Auth-request
 * Login redirect and Access Token request links
 */
const discovery = {
  authorizationEndpoint: 'https://login.uber.com/oauth/v2/authorize',
  tokenEndpoint: 'https://login.uber.com/oauth/v2/token',
  revocationEndpoint: 'https://login.uber.com/oauth/v2/revoke',
};


/**
 * @param {See imports for parameters, (const)useAuthrequest, (Hook)useEffect, renders a button(arrow icon)}
 * @returns Login button to an external service(Uber) and Auth status with access token
 */

export default function UberRedirect() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: 'iz6KSgbKi7EADQybtjMR-P8MeCNMPBi-',
      scopes: ['profile', 'delivery'],
      redirectUri: makeRedirectUri({
        scheme: 'com.mystro.oauth' , path: 'UberRedirect.jst' 
        
        //The link is com.mystro.oauth://redirect/UberRedirect.js
        //For any changes also configure the app.json scheme
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
    }
    
  }, [response]);

  return (
    <View>
      
    <TouchableOpacity disabled={!request} onPress={() => {promptAsync();}}>
      <Image 
        source={require('../icons/arrow.png')}
        style={{width: 20, height: 20,  tintColor: 'green',}}
                        
      />
    </TouchableOpacity>

    </View>
    
  );
}