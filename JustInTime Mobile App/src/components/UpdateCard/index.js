import { Text, View } from 'react-native';

const UpdateCard = () => (
    <View
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
                    color: 'red',
                    fontWeight: 'bold',
                }}
            >
                This is the update title
            </Text>
            <Text style={{ color: '#595959' }}>n minutes ago</Text>
        </View>
        <Text style={{ paddingHorizontal: 12 }}>This is the body text...</Text>
    </View>
);

export default UpdateCard;
