import { useCallback, useEffect, useState } from 'react';
import {
    FlatList,
    TouchableOpacity,
    View,
    Text,
    RefreshControl,
} from 'react-native';
import BackButton from '../../../components/BackButton';
import TitleBar from './../../../components/TitleBar';
import useData from '../../../hooks/useData';

const limit = 150;
const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

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

const ResourceList = ({ route, navigation }) => {
    const { title, resourceCategory } = route.params;
    const { allData, refresh } = useData();
    const [refreshing, setRefreshing] = useState(false);

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
    for (const element of allData.filter(
        (e) => e['category'] == resourceCategory
    )) {
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
        <View style={[{ paddingTop: 56 }, { paddingBottom: 8 }]}>
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
                    minHeight: 100,
                }}
                contentContainerStyle={{
                    paddingBottom: 30,
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                alwaysBounceVertical={false}
            />
        </View>
    );
};

export default ResourceList;
