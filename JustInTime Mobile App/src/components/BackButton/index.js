import { TouchableOpacity, Text } from 'react-native';

const BackButton = ({ navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
            style={{ paddingHorizontal: 24, paddingVertical: 5 }}
        >
            <Text style={{ fontSize: 24, color: '#4B9CD3' }}>
                &#x2190; Back
            </Text>
        </TouchableOpacity>
    );
};

export default BackButton;
