import { render, screen } from '@testing-library/react-native';
import HomeScreen from './../../src/navigation/screens/Home';

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
