import { View } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';
import Update from '../../../components/UpdateCard';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <DateBar />
            <TitleBar name="Recent Updates" />
            <Update navigation={navigation} category="ALL" />
        </View>
    );
};

export default HomeScreen;
