import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';
import Post from '../../../components/Post';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <DateBar />
            <TitleBar name="Feed" />
            <Post navigation={navigation} />
        </View>
    );
};

export default HomeScreen;
