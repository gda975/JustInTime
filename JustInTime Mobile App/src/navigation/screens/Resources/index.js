import { View, Text } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';

const ResourceScreen = () => {
    return (
        <View>
            <DateBar/>
            <View style={{flexDirection:"row"}}>
                <TitleBar name='Resources'/>
            </View>
        </View>
    );
};

export default ResourceScreen;
