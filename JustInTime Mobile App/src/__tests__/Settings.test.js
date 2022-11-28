import { render, screen } from '@testing-library/react-native';
import SettingsScreen from './../../src/navigation/screens/Settings';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('integration check that title shows on resources page', () => {
    render(<SettingsScreen />);
    expect(screen.getByText('Settings')).toBeTruthy();
});

test('check that date bar shows on resources page', () => {
    render(<SettingsScreen />);
    expect(
        screen.getByText(`${new Date().getDate()}`, {
            exact: false,
        })
    ).toBeTruthy();
});

test('check for same updates page snapshot', () => {
    const tree = renderer.create(<SettingsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
