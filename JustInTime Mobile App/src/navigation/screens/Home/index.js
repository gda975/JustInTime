import { View, Text } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';
import Post from '../../../components/Post';

const HomeScreen = () => {
    return (
        <View>
            <DateBar/>
            <TitleBar name='Feed'/>
            <Post/>
        </View>
    );
};

export default HomeScreen;
