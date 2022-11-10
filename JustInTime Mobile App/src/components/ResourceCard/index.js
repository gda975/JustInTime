import { View, Text, StyleSheet } from 'react-native';

const ResourceCard = (props) => {
    return (
        <View style={styles.shadowContainer}>
            <View style={{
                backgroundColor: props.color,
                padding: 20,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12
            }}>
            </View>
            <View style={styles.textArea}>
                <Text style={styles.text}>
                    {props.name1}
                    {'\n'}
                    {props.name2}
                </Text>
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
    textArea: {
        backgroundColor: '#F4E8DD',
        height: 140,
        width: 176,
        justifyContent: 'center',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default ResourceCard;