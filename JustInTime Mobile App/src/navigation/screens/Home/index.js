import { View, Text } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';

const HomeScreen = () => {
    return (
        <View>
            <DateBar/>
            <TitleBar name='Feed'/>
        </View>
    );
};

export default HomeScreen;
