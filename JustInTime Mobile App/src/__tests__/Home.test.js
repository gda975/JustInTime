import { render, screen } from '@testing-library/react-native';
import HomeScreen from './../../src/navigation/screens/Home';
import App from './../navigation/index.js';

test('first test', () => {
    jest.mock('Ionicons', () => jest.fn());
    render(<App />);
    // render(<HomeScreen />);
    expect(screen.getByText('Feed')).toBeTruthy();
    expect(screen.getByText('Settings')).toBeTruthy();
});
