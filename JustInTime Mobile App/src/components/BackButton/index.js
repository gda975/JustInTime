import { TouchableOpacity, Image } from 'react-native';

const BackButton = ({ navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
            style={{ paddingHorizontal: 24, paddingVertical: 5 }}
        >
            <Image
                source={require('../../../assets/backbutton.png')}
                style={{ height: 45, width: 45 }}
            />
        </TouchableOpacity>
    );
};

export default BackButton;
