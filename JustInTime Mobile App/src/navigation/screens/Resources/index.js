import { View, Text } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';

const ResourceScreen = () => {
    return (
        <View>
            <DateBar/>
            <TitleBar name='Resources'/>
        </View>
    );
};

export default ResourceScreen;
