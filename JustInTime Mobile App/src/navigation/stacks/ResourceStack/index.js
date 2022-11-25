import { createStackNavigator } from '@react-navigation/stack';

import ContentScreen from '../../screens/Content';
import ResourceScreen from '../../screens/Resources';
import ResourceListScreen from '../../screens/ResourceList';

const Stack = createStackNavigator();

const ResourceStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="ResourceScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="ResourceScreen" component={ResourceScreen} />
            <Stack.Screen
                name="ResourceListScreen"
                component={ResourceListScreen}
            />
            <Stack.Screen name="ContentScreen" component={ContentScreen} />
        </Stack.Navigator>
    );
};

export default ResourceStack;
