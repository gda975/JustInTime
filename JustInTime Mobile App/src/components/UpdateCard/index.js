import {
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    FlatList,
} from 'react-native';
import { getData } from '../../../FirebaseAPI';
import { useState, useEffect } from 'react';

const limit = 50;

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
                {item.datetime || 'n minutes ago'}
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

    useEffect(() => {
        setTimeout(
            () => setData(getData(props.category, props.setEntries).reverse()),
            800
        );
    }, []);

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
                style={{ marginBottom: 265 }}
                contentContainerStyle={{ paddingBottom: 30 }}
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
    } else if (category == 'Staff Events') {
        return '13294B';
    } else {
        return '#4A4E4D';
    }
}

export default Update;
