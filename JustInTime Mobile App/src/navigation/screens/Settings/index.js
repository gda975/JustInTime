import { View, Text } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';

const SettingsScreen = () => {
    return (
        <View>
            <DateBar/>
            <View style={{flexDirection:"row"}}>
                <TitleBar name='Settings'/>
            </View>
        </View>
    );
};

export default SettingsScreen;
