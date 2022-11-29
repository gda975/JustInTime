import { View, Text } from 'react-native';

const DateBar = () => {
    let date = new Date();

    return (
        <View
            style={[
                { paddingHorizontal: 24 },
                { paddingTop: 56 },
                { paddingBottom: 8 },
            ]}
        >
            <Text style={{ fontSize: 24, color: '#4B9CD3' }}>
                {`${date.toLocaleDateString('en-us', {
                    weekday: 'long',
                })}, ${date.toLocaleDateString('en-us', {
                    month: 'long',
                })} ${date.getDate()}`}
            </Text>
        </View>
    );
};

export default DateBar;
