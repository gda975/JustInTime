import { render, screen } from '@testing-library/react-native';
import ResourcesScreen from './../../src/navigation/screens/Resources';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('integration check that feed shows on resources page', () => {
    render(<ResourcesScreen />);
    expect(screen.getByText('Resources')).toBeTruthy();
});

test('check that date bar shows on resources page', () => {
    render(<ResourcesScreen />);
    expect(
        screen.getByText(`${new Date().getDate()}`, {
            exact: false,
        })
    ).toBeTruthy();
});

test('check that all resources render', () => {
    render(<ResourcesScreen />);
    expect(screen.getByText('Policy Links')).toBeTruthy();
    expect(screen.getByText('Useful Sites')).toBeTruthy();
    expect(screen.getByText('Helpful Reading')).toBeTruthy();
    expect(screen.getByText('Instructional Videos')).toBeTruthy();
    expect(screen.getByText('Workplace Updates')).toBeTruthy();
    expect(screen.getByText('Staff Events')).toBeTruthy();
});

test('check for same updates page snapshot', () => {
    const tree = renderer.create(<ResourcesScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});
