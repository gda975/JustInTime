import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/Home';
import UpdatesScreen from './screens/Updates';
import ResourcesScreen from './screens/Resources';
import SettingsScreen from './screens/Settings';


// Screen Names
const homeName = 'Home';
const updatesName = 'Updates';
const resourcesName = 'Resources';
const settingsName = 'Settings';


const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (routeName === updatesName) {
                        iconName = focused ? 'sync' : 'sync-outline'
                    } else if (routeName === resourcesName) {
                        iconName = focused ? 'albums' : 'albums-outline'
                    } else if (routeName === settingsName) {
                        iconName = focused ? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#000000',
                tabBarStyle: {padding: 10, height: 85, backgroundColor: '#5DADE2'},
                headerShown: false

            })}
            >

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={updatesName} component={UpdatesScreen}/>
            <Tab.Screen name={resourcesName} component={ResourcesScreen}/>
            <Tab.Screen name={settingsName} component={SettingsScreen}/>


            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainContainer;