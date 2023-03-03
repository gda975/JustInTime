import { useState } from 'react';
import { View, Text, Switch, ScrollView } from 'react-native';
import DateBar from '../../../components/DateBar';
import TitleBar from '../../../components/TitleBar';
import useData from '../../../hooks/useData';

import { toggleTopicSubscription } from '../../../notifications/notifications';

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
                onValueChange={() => {
                    setToggle(!toggle);
                    toggleTopicSubscription(toggle, props.children);
                }}
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
    const { getCategoryShown, updateCategoriesShown } = useData();

    const categoryControl = (category) => {
        const isShown = getCategoryShown(category);
        return [isShown, () => updateCategoriesShown(category, !isShown)];
    };

    const CategorySet = (props) => (
        <View>
            <SettingsItem
                disabled={props.disabled}
                toggleControl={
                    props.isFeedToggle && categoryControl('Policy Links')
                }
            >
                Policy Links
            </SettingsItem>
            <SettingsItem
                disabled={props.disabled}
                toggleControl={
                    props.isFeedToggle && categoryControl('Useful Sites')
                }
            >
                Useful Sites
            </SettingsItem>
            <SettingsItem
                disabled={props.disabled}
                toggleControl={
                    props.isFeedToggle && categoryControl('Helpful Reading')
                }
            >
                Helpful Reading
            </SettingsItem>
            <SettingsItem
                disabled={props.disabled}
                toggleControl={
                    props.isFeedToggle &&
                    categoryControl('Instructional Videos')
                }
            >
                Instructional Videos
            </SettingsItem>
            <SettingsItem
                disabled={props.disabled}
                toggleControl={
                    props.isFeedToggle && categoryControl('Workplace Updates')
                }
            >
                Workplace Updates
            </SettingsItem>
            <SettingsItem
                disabled={props.disabled}
                toggleControl={
                    props.isFeedToggle && categoryControl('Staff Events')
                }
            >
                Staff Events
            </SettingsItem>
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
                        Allow Notifications
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
                    <CategorySet isFeedToggle />
                </SettingsGroup>
            </ScrollView>
        </View>
    );
};

export default SettingsScreen;
