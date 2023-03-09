import { WebView } from 'react-native-webview';
import { View, Text } from 'react-native';
import * as React from 'react';
import { StyleSheet } from 'react-native';

export default function EmbeddedLink({videoLink}) {
    if (!videoLink){
        return null
    }
    return (
        <View>
            <WebView
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={false}
                scalesPageToFit={true}
                originWhitelist={['*']}
                style={styles.container}
                source={{
                    html: `<iframe width="100%" height="100%" src=${videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: 350,
        height: 200,
    },
});
