import { View } from 'react-native';
import { useEffect, useState } from 'react';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';
import Post from '../../../components/Post';
import { getData } from '../../../../FirebaseAPI';

const HomeScreen = ({ navigation }) => {
    let [category, setCategory] = useState('ALL');
    let [globalEntries, setEntries] = useState([]);

    useEffect(() => {
        getData(category, setEntries);
    }, [category]);

    return (
        <View>
            <DateBar />
            <TitleBar name="Feed" />
            <Post
                navigation={navigation}
                category={category}
                globalEntries={globalEntries}
                setEntries={setEntries}
            />
        </View>
    );
};

export default HomeScreen;
