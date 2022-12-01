import { View } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';
import Post from '../../../components/Post';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <DateBar />
            <TitleBar name="Feed" />
            <Post navigation={navigation} category="ALL" />
        </View>
    );
};

export default HomeScreen;
