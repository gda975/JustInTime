import { View, Text } from 'react-native';

const DateBar = () => {
    let date = new Date();
    const weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return (
        <View
            style={[
                {paddingHorizontal: 24},
                {paddingVertical: 16},
            ]}
        >
            <Text style={{ fontSize: 24, color: '#4B9CD3'}}>
                {`${weekday[date.getDay()]}, ${
                    month[date.getMonth()]
                } ${date.getDate()}`}
            </Text>
        </View>
    );
};

export default DateBar;
