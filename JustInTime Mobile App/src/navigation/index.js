import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/Home';
import UpdatesScreen from './screens/Updates';
import ResourceScreen from './screens/Resources';
import SettingsScreen from './screens/Settings';
import ContentScreen from './screens/Content';
import HomeStack from './stacks/HomeStack';
import UpdatesStack from './stacks/UpdatesStack';
import ResourceStack from './stacks/ResourceStack';

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
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let routeName = route.name;

                        if (routeName === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (routeName === updatesName) {
                            iconName = focused ? 'sync' : 'sync-outline';
                        } else if (routeName === resourcesName) {
                            iconName = focused ? 'albums' : 'albums-outline';
                        } else if (routeName === settingsName) {
                            iconName = focused
                                ? 'settings'
                                : 'settings-outline';
                        }

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: '#FFFFFF',
                    tabBarInactiveTintColor: '#000000',
                    tabBarStyle: {
                        padding: 10,
                        height: 85,
                        backgroundColor: '#5DADE2',
                    },
                    headerShown: false,
                })}
            >
                <Tab.Screen name={homeName} component={HomeStack} />
                <Tab.Screen name={updatesName} component={UpdatesStack} />
                <Tab.Screen name={resourcesName} component={ResourceStack} />
                <Tab.Screen name={settingsName} component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainContainer;
