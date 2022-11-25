import { Text, TouchableOpacity, View } from 'react-native';

const UpdateCard = (props) => {
    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('ContentScreen', {
                    title: props.title,
                    content: props.content,
                    datetime: props.datetime,
                });
            }}
            style={{
                backgroundColor: '#ebebeb',
                height: 72,
                marginTop: 8,
                marginHorizontal: 24,
                borderRadius: 8,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 12,
                    paddingBottom: 8,
                }}
            >
                <Text
                    style={{
                        color: `${props.color || 'red'}`,
                        fontWeight: 'bold',
                    }}
                >
                    {props.title || 'This is the update title'}
                </Text>
                <Text style={{ color: '#595959', fontSize: 12 }}>
                    {props.datetime || 'n minutes ago'}
                </Text>
            </View>
            <Text style={{ paddingHorizontal: 12 }}>
                {props.text || 'This is the body text...'}
            </Text>
        </TouchableOpacity>
    );
};

export default UpdateCard;
