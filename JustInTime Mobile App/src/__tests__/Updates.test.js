import { render, screen } from '@testing-library/react-native';
import UpdatesScreen from './../../src/navigation/screens/Updates';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('integration check that feed shows on updates page', () => {
    render(<UpdatesScreen />);
    expect(screen.getByText('Recent Updates')).toBeTruthy();
});

test('check that date bar shows on updates page', () => {
    render(<UpdatesScreen />);
    expect(
        screen.getByText(`${new Date().getDate()}`, {
            exact: false,
        })
    ).toBeTruthy();
});

test('check for same updates page snapshot', () => {
    const tree = renderer.create(<UpdatesScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
