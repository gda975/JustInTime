import { jsonEval } from '@firebase/util';
import { useFocusEffect } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { getData } from '../../../FirebaseAPI';

const limit = 45;

const Item = ({ title, content, datetime, color, navigation }) => (
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
                <View style={styles.datetimebar}>
                    <Text style={styles.datecontent}>{datetime}</Text>
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
            title: element['author'],
            content: element['content'],
            datetime: element['time'],
        });
    }
    // console.log(jsonData, data);

    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            content={item.content}
            datetime={item.datetime}
            navigation={props.navigation}
        />
    );
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
        backgroundColor: '#DE3163',
        color: 'white',
        fontSize: 16,
    },
    datecontent: {
        fontSize: 16,
        color: 'white',
    },
});

export default Post;
