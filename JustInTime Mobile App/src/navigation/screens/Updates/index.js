import { View, FlatList } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';
import UpdateCard from '../../../components/UpdateCard';

const UpdatesList = [
    {
        title: 'Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: '4m ago',
        color: 'blue',
    },
    {
        title: 'Another Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: '4m ago',
        color: 'purple',
    },
    {
        title: 'Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: '4h ago',
    },
    {
        title: 'Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: 'Yesterday',
        color: 'green',
    },
    {
        title: 'Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: '4m ago',
    },
    {
        title: 'Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: '4m ago',
        color: 'blue',
    },
    {
        title: 'Another Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: '4m ago',
        color: 'purple',
    },
    {
        title: 'Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: '4h ago',
    },
    {
        title: 'Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: 'Yesterday',
        color: 'green',
    },
    {
        title: 'Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: '4m ago',
    },
    {
        title: 'Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: '4m ago',
        color: 'blue',
    },
    {
        title: 'Another Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: '4m ago',
        color: 'purple',
    },
    {
        title: 'Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: '4h ago',
    },
    {
        title: 'Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: 'Yesterday',
        color: 'green',
    },
    {
        title: 'Test title',
        text: 'Lorem ipsum dolor sit amet',
        time: '4m ago',
    },
];

const UpdatesScreen = () => {
    const renderItem = ({ item }) => {
        return (
            <UpdateCard
                title={item.title}
                text={item.text}
                time={item.time}
                color={item.color}
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
