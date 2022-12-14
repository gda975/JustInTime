import { render, screen } from '@testing-library/react-native';
import SettingsScreen from './../../src/navigation/screens/Settings';

jest.useFakeTimers();

test('integration check that title shows on settings page', () => {
    render(<SettingsScreen />);
    expect(screen.getByText('Settings')).toBeTruthy();
});

test('check that date bar shows on settings page', () => {
    render(<SettingsScreen />);
    expect(
        screen.getByText(`${new Date().getDate()}`, {
            exact: false,
        })
    ).toBeTruthy();
});

test('check notifications settings render properly', () => {
    render(<SettingsScreen />);
    expect(screen.getByText('Allow notifications')).toBeTruthy();
    expect(screen.getByText('Subscribed notifications:')).toBeTruthy();
});

test('check feed settings render properly', () => {
    render(<SettingsScreen />);
    expect(screen.getByText('Show in feed:')).toBeTruthy();
});
