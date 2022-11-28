import { render, screen } from '@testing-library/react-native';
import HomeScreen from './../../src/navigation/screens/Home';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('integration check that feed shows on home page', () => {
    render(<HomeScreen />);
    expect(screen.getByText('Feed')).toBeTruthy();
});

test('check that date bar shows on home page', () => {
    render(<HomeScreen />);
    expect(
        screen.getByText(`${new Date().getDate()}`, {
            exact: false,
        })
    ).toBeTruthy();
});

test('check for same homepage snapshot', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
