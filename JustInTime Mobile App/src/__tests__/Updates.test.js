import { render, screen } from '@testing-library/react-native';
import UpdatesScreen from './../../src/navigation/screens/Updates';

jest.useFakeTimers();

test('integration check that title shows on updates page', () => {
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
