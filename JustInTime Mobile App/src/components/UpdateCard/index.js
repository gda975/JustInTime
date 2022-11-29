import {
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    FlatList,
    RefreshControl,
} from 'react-native';
import { getData } from '../../../FirebaseAPI';
import { useState, useEffect, useCallback } from 'react';

const limit = 40;
const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const parseDateTime = (datetime) => {
    const date = new Date(datetime.replace(/\-/g, '/'));
    const now = new Date();

    const getMonth = (date) =>
        date.toLocaleDateString('en-us', {
            month: 'short',
        });

    const dayNum = date.getDate();

    const time = date
        .toLocaleTimeString()
        .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3');

    if (getMonth(now) == getMonth(date) && date.getDate() == now.getDate()) {
        return `${time}`;
    } else {
        return `${getMonth(date)} ${dayNum}, ${time}`;
    }
};

const Item = ({ item, navigation }) => (
    <TouchableOpacity
        onPress={() => {
            navigation.navigate('ContentScreen', {
                title: item.title,
                content: item.content,
                datetime: item.datetime,
                color: item.color,
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
                    color: `${getColor(item.category) || 'red'}`,
                    fontWeight: 'bold',
                }}
            >
                {item.title || 'This is the update title'}
            </Text>
            <Text style={{ color: '#595959', fontSize: 12 }}>
                {parseDateTime(item.datetime) || ''}
            </Text>
        </View>
        {
            <Text style={{ paddingHorizontal: 12 }}>
                {item.content.length > limit
                    ? item.content.substring(0, limit) + '...'
                    : item.content || 'This is the body text...'}
            </Text>
        }
    </TouchableOpacity>
);

const Update = (props) => {
    const [data, setData] = useState([]);
    const [refreshToggle, setRefreshToggle] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setData(getData(props.category, props.setEntries).reverse());
            setRefreshToggle(false);
        }, 800);
    }, [refreshToggle]);

    const onRefresh = useCallback(() => {
        setRefreshToggle(true);
        wait(1500).then(() => setRefreshToggle(false));
    });

    let jsonData = [];
    for (const element of data) {
        jsonData.push({
            title: element['title'],
            content: element['content'],
            datetime: element['time'],
            category: element['category'],
        });
    }

    const renderItem = ({ item }) => {
        return <Item item={item} navigation={props.navigation} />;
    };
    return (
        <SafeAreaView>
            <FlatList
                data={jsonData}
                renderItem={renderItem}
                style={{ marginBottom: 265, minHeight: 100 }}
                contentContainerStyle={{ paddingBottom: 30 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshToggle}
                        onRefresh={onRefresh}
                    />
                }
                alwaysBounceVertical={false}
            />
        </SafeAreaView>
    );
};

function getColor(category) {
    if (category == 'Policy Links') {
        return '#EF426F';
    } else if (category == 'Useful Sites') {
        return '#A8673E';
    } else if (category == 'Helpful Reading') {
        return '#00A5AD';
    } else if (category == 'Instructional Videos') {
        return '#C4D600';
    } else if (category == 'Workplace Updates') {
        return '#00594C';
    } else if (category == 'Staff Events' || category == 'Staff Event') {
        return '#13294B';
    } else {
        return '#4A4E4D';
    }
}

export default Update;
