import { View, ScrollView, StyleSheet } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';
import ResourceCard from '../../../components/ResourceCard';

const ResourceScreen = ({ navigation }) => {
    return (
        <View>
            <DateBar />
            <TitleBar name="Resources" />
            <ScrollView contentContainerStyle={styles.flexContainer}>
                <ResourceCard
                    text={['Policy', 'Links']}
                    color="#EF426F"
                    navigation={navigation}
                />
                <ResourceCard
                    text={['Useful', 'Sites']}
                    color="#A8673E"
                    navigation={navigation}
                />
                <ResourceCard
                    text={['Helpful', 'Reading']}
                    color="#00A5AD"
                    navigation={navigation}
                />
                <ResourceCard
                    text={['Instructional', 'Videos']}
                    color="#C4D600"
                    navigation={navigation}
                />
                <ResourceCard
                    text={['Workplace', 'Updates']}
                    color="#00594C"
                    navigation={navigation}
                />
                <ResourceCard
                    text={['Staff', 'Events']}
                    color="#13294B"
                    navigation={navigation}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingBottom: 150,
    },
});

export default ResourceScreen;
