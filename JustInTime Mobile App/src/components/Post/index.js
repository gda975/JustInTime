import { useCallback, useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    RefreshControl,
} from 'react-native';
import useData from '../../hooks/useData';

const limit = 45;
const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const parseDateTime = (datetime) => {
    const date = new Date(
        typeof datetime == 'string' ? datetime.replace(/\-/g, '/') : datetime
    );

    const month = date.toLocaleDateString('en-us', {
        month: 'long',
    });

    const dayNum = date.getDate();

    const time = date
        .toLocaleTimeString()
        .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3');

    return `${month} ${dayNum}, ${time}`;
};

const Item = ({ title, content, datetime, category, color, navigation }) => (
    <TouchableOpacity
        onPress={() => {
            navigation.navigate('ContentScreen', {
                title: title,
                content: content,
                datetime: datetime,
                color: color,
            });
        }}
    >
        <View style={styles.shadowContainer}>
            <View style={styles.item}>
                <View
                    style={[
                        styles.datetimebar,
                        { backgroundColor: getColor(category) },
                    ]}
                >
                    <Text style={styles.datecontent}>
                        {parseDateTime(datetime)}
                    </Text>
                </View>
                <View style={styles.contentView}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.content}>
                        {content.length > limit
                            ? content.substring(0, limit) + '...'
                            : content}
                    </Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

const Post = (props) => {
    const { allData, refresh, categoryList } = useData();
    const [refreshing, setRefreshing] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            refresh();
            setRefreshing(false);
        }, 800);
    }, [refreshing]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refresh();
        wait(1500).then(() => setRefreshing(false));
    });

    let jsonData = [];

    for (const element of allData.filter((e) =>
        categoryList.includes(e['category'])
    )) {
        jsonData.push({
            title: element['title'],
            content: element['content'],
            datetime: element['time'],
            category: element['category'],
        });
    }

    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            content={item.content}
            datetime={item.datetime}
            category={item.category}
            navigation={props.navigation}
        />
    );
    return (
        <SafeAreaView>
            <FlatList
                data={jsonData}
                renderItem={renderItem}
                style={{ marginBottom: 265, minHeight: 100 }}
                contentContainerStyle={{ paddingBottom: 30 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
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

const styles = StyleSheet.create({
    shadowContainer: {
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.25,
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 24,
        borderRadius: 12,
        overflow: 'hidden',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 4,
    },
    content: {
        fontSize: 16,
    },
    contentView: {
        paddingTop: 10,
        paddingBottom: 12,
        paddingHorizontal: 12,
        backgroundColor: '#E8DED1',
    },
    datetimebar: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        color: 'white',
        fontSize: 16,
    },
    datecontent: {
        fontSize: 16,
        color: 'white',
    },
});

export default Post;
