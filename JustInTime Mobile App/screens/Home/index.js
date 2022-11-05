import { View, Text } from 'react-native';
import DateBar from '../../components/DateBar';
import SettingsButton from '../../components/SettingsButton';
import TitleBar from '../../components/TitleBar';

const Home = () => {
    return (
        <View>
            <DateBar/>
            <View style={{flexDirection:"row"}}>
                <TitleBar name='Feed'/>
                <SettingsButton></SettingsButton>
            </View>
        </View>
    );
};

export default Home;
