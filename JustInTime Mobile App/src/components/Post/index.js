import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

// import the data from the database and convert into this format
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        content: 'content',
        datetime: 'November 2nd',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        content: 'content',
        datetime: 'November 1st',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        content: 'content',
        datetime: 'October 31st',
    },
];

const Item = ({ title, content, datetime }) => (
    <View style={styles.shadowContainer}>
        <View style={styles.item}>
            <View style={styles.datetimebar}>
                <Text style={styles.datecontent}>{datetime}</Text>
            </View>
            <View style={styles.contentView}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
            </View>
        </View>
    </View>
);

const Post = () => {
    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            content={item.content}
            datetime={item.datetime}
        />
    );

    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
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
