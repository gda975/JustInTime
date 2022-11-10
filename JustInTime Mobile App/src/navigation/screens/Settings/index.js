import { View, Text } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';

const SettingsScreen = () => {
    return (
        <View>
            <DateBar/>
            <TitleBar name='Settings'/>
        </View>
    );
};

export default SettingsScreen;
