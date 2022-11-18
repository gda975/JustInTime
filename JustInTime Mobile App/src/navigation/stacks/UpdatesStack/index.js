import { createStackNavigator } from '@react-navigation/stack';

import ContentScreen from '../../screens/Content';
import UpdatesScreen from '../../screens/Updates';

const Stack = createStackNavigator();

const UpdatesStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="UpdatesScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="UpdatesScreen" component={UpdatesScreen} />
            <Stack.Screen name="ContentScreen" component={ContentScreen} />
        </Stack.Navigator>
    );
};

export default UpdatesStack;
