import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

// import the data from the database and convert into this format
const DATA = [
    {
        id: '1',
        title: 'First Item',
        content:
            "this content is really long and it won't fit on the preview. I guess you'll just have to click on it to see the super secret and important things in here",
        datetime: 'November 2nd',
        color: 'blank',
    },
    {
        id: '2',
        title: 'Second Item',
        content: 'content',
        datetime: 'November 1st',
        color: 'blank',
    },
    {
        id: '3',
        title: 'Third Item',
        content: 'content',
        datetime: 'October 31st',
        color: 'blank',
    },
    {
        id: '4',
        title: 'Fourth Item',
        content: 'content',
        datetime: 'November 2nd',
        color: 'blank',
    },
    {
        id: '5',
        title: 'Fifth Item',
        content: 'content',
        datetime: 'November 1st',
        color: 'blank',
    },
    {
        id: '6',
        title: 'Sixth Item',
        content: 'content',
        datetime: 'October 31st',
        color: 'blank',
    },
];
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

const Post = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            content={item.content}
            datetime={item.datetime}
            color={item.color}
            navigation={navigation}
        />
    );

    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
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
