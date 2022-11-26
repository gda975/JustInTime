import {
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import BackButton from '../../../components/BackButton';
import TitleBar from './../../../components/TitleBar';

const DATA = [
    {
        title: 'Test title',
        content:
            'Lorem ipsum dolor sit amet but this one will have a bunch more text just to see how the thing responds and even more text Lorem ipsum dolor sit amet but this one will have a bunch more text just to see how the thing responds and even more text',
        datetime: '4m ago',
        color: 'blue',
    },
    {
        title: 'Another Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4m ago',
        color: 'purple',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4h ago',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: 'Yesterday',
        color: 'green',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4m ago',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4m ago',
        color: 'blue',
    },
    {
        title: 'Another Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4m ago',
        color: 'purple',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4h ago',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: 'Yesterday',
        color: 'green',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4m ago',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4m ago',
        color: 'blue',
    },
    {
        title: 'Another Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4m ago',
        color: 'purple',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4h ago',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: 'Yesterday',
        color: 'green',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4m ago',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4h ago',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: 'Yesterday',
        color: 'green',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4m ago',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4h ago',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: 'Yesterday',
        color: 'green',
    },
    {
        title: 'Test title',
        content: 'Lorem ipsum dolor sit amet',
        datetime: '4m ago',
    },
];
const limit = 150;

const ResourceItem = ({ title, content, datetime, color, navigation }) => (
    <TouchableOpacity
        onPress={() => {
            navigation.navigate('ContentScreen', {
                title,
                content,
                datetime,
                color,
            });
        }}
    >
        <View
            style={{
                borderBottomWidth: 1,
                paddingVertical: 10,
                borderColor: 'gray',
            }}
        >
            <Text
                style={{ fontWeight: 'bold', fontSize: 16, paddingBottom: 4 }}
            >
                {title}
            </Text>
            <Text style={{ fontSize: 16 }}>
                {content.length > limit
                    ? content.substring(0, limit) + '...'
                    : content}
            </Text>
        </View>
    </TouchableOpacity>
);

const ResourcesList = ({ route, navigation }) => {
    const { title } = route.params;

    const renderItem = ({ item }) => (
        <ResourceItem
            title={item.title}
            content={item.content}
            datetime={item.datetime}
            color={item.color}
            navigation={navigation}
        />
    );

    return (
        <SafeAreaView>
            <BackButton navigation={navigation} />
            <TitleBar name={title} />
            <FlatList
                data={DATA}
                renderItem={renderItem}
                style={{
                    paddingHorizontal: 24,
                    paddingVertical: 0,
                    marginBottom: 75,
                    marginTop: 10,
                }}
                contentContainerStyle={{
                    paddingBottom: 30,
                }}
            />
        </SafeAreaView>
    );
};

export default ResourcesList;
