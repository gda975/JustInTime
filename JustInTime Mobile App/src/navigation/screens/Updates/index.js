import { View, Text } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';

const UpdatesScreen = () => {
    return (
        <View>
            <DateBar/>
            <View style={{flexDirection:"row"}}>
                <TitleBar name='Updates'/>
            </View>
        </View>
    );
};

export default UpdatesScreen;
