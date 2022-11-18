import { View, Text, StyleSheet } from 'react-native';
import BackButton from '../../../components/BackButton';
import DateBar from '../../../components/DateBar';

const ContentScreen = ({ route, navigation }) => {
    const { title, content, datetime } = route.params;
    return (
        <View>
            <DateBar />
            <BackButton navigation={navigation} />
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
        </View>
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

export default ContentScreen;
