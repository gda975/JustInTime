import { View, FlatList } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';
import UpdateCard from '../../../components/UpdateCard';

const UpdatesList = [
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

const UpdatesScreen = ({ navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <UpdateCard
                title={item.title}
                content={item.content}
                datetime={item.datetime}
                color={item.color}
                navigation={navigation}
            />
        );
    };

    return (
        <View>
            <DateBar />
            <TitleBar name="Recent Updates" />
            <FlatList
                renderItem={renderItem}
                data={UpdatesList}
                style={{ marginBottom: 150 }}
            />
        </View>
    );
};

export default UpdatesScreen;
