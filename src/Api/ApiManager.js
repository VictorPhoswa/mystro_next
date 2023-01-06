import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button , StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';


/** 
 * This is a reference code from Github, its it not used on this project
 * the modified code is in the UberRedirect component
 * The other Method on how to implement a authetivction
 * is provided in the  Home screen commented out
 */
WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://login.uber.com/oauth/v2/authorize',
  tokenEndpoint: 'https://login.uber.com/oauth/v2/token',
  revocationEndpoint: 'https://login.uber.com/oauth/v2/revoke',
};

export default function App() {
  const [request, response] = useAuthRequest(
    {
      clientId: 'iz6KSgbKi7EADQybtjMR-P8MeCNMPBi-',
      scopes: ['profile', 'delivery'],
      redirectUri: makeRedirectUri({
        scheme: 'mystro.next' , path: 'redirect'
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
    }
    else{
      
      console.log('fail');
    }
  }, [response]);

  return (
    <View style={{width: '50%', paddingTop: Constants.statusBarHeight,}}>
      <Button
      
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />

    </View>
    
  );
}