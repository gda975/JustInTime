import { ScrollView, StyleSheet } from 'react-native';
import ResourceCard from '../ResourceCard';

const Resources = () => {
    return (
        <ScrollView contentContainerStyle={styles.flexContainer}>
            <ResourceCard text={['Policy', 'Links']} color="#EF426F" />
            <ResourceCard text={['Useful', 'Sites']} color="#A8673E" />
            <ResourceCard text={['Helpful', 'Reading']} color="#00A5AD" />
            <ResourceCard text={['Instructional', 'Videos']} color="#C4D600" />
            <ResourceCard text={['Workplace', 'Updates']} color="#00594C" />
            <ResourceCard text={['Staff', 'Events']} color="#13294B" />
        </ScrollView>
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

export default Resources;
