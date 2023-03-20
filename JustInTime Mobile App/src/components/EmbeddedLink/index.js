import { WebView } from 'react-native-webview';
import { View, Text } from 'react-native';
import * as React from 'react';
import { StyleSheet } from 'react-native';

export default function EmbeddedLink(props) {
    if (!props.videoLink){
        return null
    }
    return (
            <WebView
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={false}
                scalesPageToFit={true}
                originWhitelist={['*']}
                style={styles.container}
                source={{
                    html: `<iframe width="100%" height="100%" opacity="0.99" target="_self" src=${props.videoLink} title="Panopto video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
                }}
            />
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: 350,
        height: 200,
        opacity: 0.99
    },
});
