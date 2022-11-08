import { View, Text } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';
import UpdateCard from '../../../components/UpdateCard';

const UpdatesScreen = () => {
    return (
        <View>
            <DateBar />
            <View style={{ flexDirection: 'row' }}>
                <TitleBar name="Recent Updates" />
            </View>
            <UpdateCard title="Test title" />
            <UpdateCard />
        </View>
    );
};

export default UpdatesScreen;
