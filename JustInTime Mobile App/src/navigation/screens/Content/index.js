import { View, Text } from 'react-native';
import BackButton from '../../../components/BackButton';
import DateBar from '../../../components/DateBar';

const ContentScreen = ({ navigation }) => {
    return (
        <View>
            <DateBar />
            <BackButton navigation={navigation} />
        </View>
    );
};

export default ContentScreen;
