import {
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import TitleBar from './../../../components/TitleBar';

const DATA = [
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
];

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
        <View>
            <Text>Title</Text>
            <Text>Content</Text>
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
            <TitleBar name={title} />
            <FlatList
                data={DATA}
                renderItem={renderItem}
                style={{ marginBottom: 265 }}
                contentContainerStyle={{ paddingBottom: 30 }}
            ></FlatList>
        </SafeAreaView>
    );
};

export default ResourcesList;
