import { createStackNavigator } from '@react-navigation/stack';

import ContentScreen from '../../screens/Content';
import HomeScreen from '../../screens/Home';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ContentScreen" component={ContentScreen} />
        </Stack.Navigator>
    );
};

export default HomeStack;
