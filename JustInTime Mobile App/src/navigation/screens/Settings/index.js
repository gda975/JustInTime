import { useState } from 'react';
import { View, Text, Switch, ScrollView } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';

const SettingsItem = (props) => {
    const [toggle, setToggle] =
        props.toggleControl || useState(props.default || true);

    return (
        <View
            style={{
                paddingVertical: 12,
                paddingHorizontal: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                borderBottomColor: '#e3e3e3',
                borderBottomWidth: 1,
            }}
        >
            <Text style={{ fontSize: 20 }}>{props.children}</Text>
            <Switch
                onValueChange={() => setToggle(!toggle)}
                value={toggle}
                disabled={props.disabled}
            />
        </View>
    );
};

const SettingsGroupTitle = (props) => (
    <View
        style={{
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
        }}
    >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {props.children}
        </Text>
    </View>
);

const SettingsGroup = (props) => (
    <View
        style={{
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 2,
            shadowOpacity: 0.25,
            marginHorizontal: 24,
            marginVertical: 12,
        }}
    >
        <View
            style={{
                borderRadius: 12,
                overflow: 'hidden',
            }}
        >
            {props.children}
        </View>
    </View>
);

const SettingsScreen = () => {
    const [notify, setNotify] = useState(false);

    const CategorySet = (props) => (
        <View>
            <SettingsItem disabled={props.disabled}>Policy Links</SettingsItem>
            <SettingsItem disabled={props.disabled}>Useful Sites</SettingsItem>
            <SettingsItem disabled={props.disabled}>
                Helpful Reading
            </SettingsItem>
            <SettingsItem disabled={props.disabled}>
                Instructional Videos
            </SettingsItem>
            <SettingsItem disabled={props.disabled}>
                Workplace Updates
            </SettingsItem>
            <SettingsItem disabled={props.disabled}>Staff Events</SettingsItem>
        </View>
    );

    return (
        <View>
            <DateBar />
            <TitleBar name="Settings" />
            <ScrollView
                alwaysBounceVertical={false}
                style={{
                    marginBottom: 125,
                }}
                contentContainerStyle={{
                    paddingBottom: 30,
                }}
            >
                <SettingsGroup>
                    <SettingsItem toggleControl={[notify, setNotify]}>
                        Allow notifications
                    </SettingsItem>
                </SettingsGroup>
                <SettingsGroup>
                    <SettingsGroupTitle>
                        Subscribed notifications:
                    </SettingsGroupTitle>
                    <CategorySet disabled={!notify} />
                </SettingsGroup>
                <SettingsGroup>
                    <SettingsGroupTitle>Show in feed:</SettingsGroupTitle>
                    <CategorySet />
                </SettingsGroup>
            </ScrollView>
        </View>
    );
};

export default SettingsScreen;
