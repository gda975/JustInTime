import { View, Text } from 'react-native';

const TitleBar = (props) => {
    return (
        <View
            style={{
                paddingHorizontal: 24,
                paddingVertical: 0,
            }}>
            <Text style={[{fontSize: 36}, {fontWeight: 'bold'}, {color: '#4B9CD3'}]}>
                {props.name}
            </Text>
        </View>
    );
};

export default TitleBar;