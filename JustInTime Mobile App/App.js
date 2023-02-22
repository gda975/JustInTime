import * as React from 'react';
import MainContainer from './src/navigation';
import 'intl';
import 'intl/locale-data/jsonp/en';
import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { Alert } from 'react-native';

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

        messaging()
          .getInitialNotification()
          .then(remoteMessage => {
            if (remoteMessage){
              console.log('notification caused app to open from quit state:', remoteMessage.notification)
            }
          })

          messaging().onNotificationOpenedApp(async (remoteMessage) => {
            console.log('Notification caused app to open from background state:', remoteMessage.notification)
          })

          messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Message handled in the background', remoteMessage)
          })

          // in app alert because only option supported
          const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('a new message arrived', JSON.stringify(remoteMessage))
          })

          return unsubscribe;
    })
    return <MainContainer />;
}
