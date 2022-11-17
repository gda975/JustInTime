import { View, Text } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';
import Resources from '../../../components/Resources';

const ResourceScreen = () => {
    return (
        <View>
            <DateBar />
            <TitleBar name="Resources" />
            <Resources />
        </View>
    );
};

export default ResourceScreen;
