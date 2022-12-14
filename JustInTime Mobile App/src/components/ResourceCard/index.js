import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ResourceCard = (props) => {
    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('ResourceListScreen', {
                    title: `${(props.text && props.text[0]) || ''} ${
                        (props.text && props.text[1]) || ''
                    }`,
                    resourceCategory: props.category,
                });
            }}
        >
            <View style={styles.shadowContainer}>
                <View
                    style={{
                        backgroundColor: props.color,
                        padding: 20,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                    }}
                />
                <View style={styles.textArea}>
                    <Text style={styles.text}>
                        {`${(props.text && props.text[0]) || ''} \n ${
                            (props.text && props.text[1]) || ''
                        }`}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    shadowContainer: {
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.25,
        margin: 12,
    },
    textArea: {
        backgroundColor: '#F4E8DD',
        height: 120,
        width: 160,
        justifyContent: 'center',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ResourceCard;
