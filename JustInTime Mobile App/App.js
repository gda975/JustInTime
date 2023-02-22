import * as React from 'react';
import MainContainer from './src/navigation';
import 'intl';
import 'intl/locale-data/jsonp/en';
import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';

export default function App() {
    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      
        if (enabled) {
          console.log('Authorization status:', authStatus);
        }
      }


    useEffect(() => {
        if(requestUserPermission()){
            messaging().getToken().then(token => console.log(token))
        } else{
            console.log("failed to get token")
        }
    })
    return <MainContainer />;
}
