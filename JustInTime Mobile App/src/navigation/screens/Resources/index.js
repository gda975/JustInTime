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
                    category="Policy Links"
                    navigation={navigation}
                />
                <ResourceCard
                    text={['Useful', 'Sites']}
                    color="#A8673E"
                    category="Useful Sites"
                    navigation={navigation}
                />
                <ResourceCard
                    text={['Helpful', 'Reading']}
                    color="#00A5AD"
                    category="Helpful Reading"
                    navigation={navigation}
                />
                <ResourceCard
                    text={['Instructional', 'Videos']}
                    color="#C4D600"
                    category="Instructional Videos"
                    navigation={navigation}
                />
                <ResourceCard
                    text={['Workplace', 'Updates']}
                    color="#00594C"
                    category="Workplace Updates"
                    navigation={navigation}
                />
                <ResourceCard
                    text={['Staff', 'Events']}
                    color="#13294B"
                    category="Staff Events"
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
