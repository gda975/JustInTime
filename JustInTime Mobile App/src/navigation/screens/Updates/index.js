import { View, Text } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';

const UpdatesScreen = () => {
    return (
        <View>
            <DateBar/>
            <TitleBar name='Updates'/>
        </View>
    );
};

export default UpdatesScreen;
