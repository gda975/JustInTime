import { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import BackButton from '../../../components/BackButton';
import TitleBar from './../../../components/TitleBar';
import { getData } from '../../../../FirebaseAPI';

const limit = 150;

const ResourceItem = ({ title, content, datetime, color, navigation }) => (
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
        <View
            style={{
                borderBottomWidth: 1,
                paddingVertical: 10,
                borderColor: 'gray',
            }}
        >
            <Text
                style={{ fontWeight: 'bold', fontSize: 16, paddingBottom: 4 }}
            >
                {title}
            </Text>
            <Text style={{ fontSize: 16 }}>
                {content.length > limit
                    ? content.substring(0, limit) + '...'
                    : content}
            </Text>
        </View>
    </TouchableOpacity>
);

const ResourcesList = ({ route, navigation }) => {
    const { title, category, resourceCategory, globalEntries, setEntries } =
        route.params;
    const [data, setData] = useState([]);
    const JSONresourceCategory = JSON.stringify(resourceCategory);
    const withoutQuotes = JSONresourceCategory.replaceAll('"', '');

    useEffect(() => {
        setTimeout(
            () => setData(getData(withoutQuotes, setEntries).reverse()),
            800
        );
        console.log(withoutQuotes);
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
            <BackButton navigation={navigation} />
            <TitleBar name={title} />
            <FlatList
                data={jsonData}
                renderItem={renderItem}
                style={{
                    paddingHorizontal: 24,
                    paddingVertical: 0,
                    marginBottom: 75,
                    marginTop: 10,
                }}
                contentContainerStyle={{
                    paddingBottom: 30,
                }}
            />
        </SafeAreaView>
    );
};

export default ResourcesList;
