import { render, screen } from '@testing-library/react-native';
import HomeScreen from './../../src/navigation/screens/Home';

test('first test', () => {
    render(<HomeScreen />);
    expect(screen.getByText('Feed')).toBeTruthy();
    expect(
        screen.getByText(`${new Date().getDate()}`, {
            exact: false,
        })
    ).toBeTruthy();
});
