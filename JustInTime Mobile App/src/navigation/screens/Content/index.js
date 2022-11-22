import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import BackButton from '../../../components/BackButton';

const ContentScreen = ({ route, navigation }) => {
    const { title, content, datetime } = route.params;
    return (
        <SafeAreaView>
            <BackButton navigation={navigation} />
            <ScrollView
                style={{
                    paddingHorizontal: 24,
                    marginBottom: 0,
                }}
                contentContainerStyle={{ paddingBottom: 50 }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#4B9CD3',
                        paddingVertical: 8,
                    }}
                >
                    {title}
                </Text>
                {datetime && (
                    <Text
                        style={{
                            paddingVertical: 8,
                            fontSize: 20,
                            color: 'gray',
                        }}
                    >
                        {datetime}
                    </Text>
                )}
                <Text style={{ paddingVertical: 8, fontSize: 20 }}>
                    {content}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ContentScreen;
