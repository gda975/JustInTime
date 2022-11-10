import { View, Text, StyleSheet } from 'react-native';
import ResourceCard from '../ResourceCard';

const Resources = () => {
    return (
        <View style={styles.outerFlexBox}>
            <View style={styles.leftColumn}>
                <ResourceCard name1='Policy' name2='Links' color='#EF426F'> </ResourceCard>
                <ResourceCard name1='Useful' name2='Sites' color='#A8673E'> </ResourceCard>
                <ResourceCard name1='Helpful' name2='Reading' color= '#00A5AD'> </ResourceCard>
            </View>
            <View style={styles.rightColumn}>
                <ResourceCard name1='Instructional' name2='Videos' color ='#C4D600'> </ResourceCard>
                <ResourceCard name1='Workplace' name2='Updates' color='#00594C'> </ResourceCard>
                <ResourceCard name1='Staff' name2='Events' color='#13294B'> </ResourceCard>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerFlexBox: {
        flexDirection: "row",
        justifyContent: "center",
        height: 600,
        paddingTop: 10
    },
    leftColumn: {
        flexDirection: "column",
        justifyContent: "space-between",
        paddingRight: 8
    },
    rightColumn: {
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: 8
    }
});

export default Resources;