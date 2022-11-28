import { render, screen } from '@testing-library/react-native';
import ContentScreen from './../../src/navigation/screens/Content';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('integration check content page renders properly', () => {
    let testTitle = 'test title randomly generated';
    render(
        <ContentScreen
            route={{
                params: {
                    title: testTitle,
                    content: 'Test content',
                    datetime: 'Test date',
                },
            }}
        />
    );
    expect(screen.getByText(testTitle)).toBeTruthy();
    expect(screen.getByText('Test content')).toBeTruthy();
    expect(screen.getByText('Test date')).toBeTruthy();
});

test('check that back button exists', () => {
    render(
        <ContentScreen
            route={{
                params: {
                    title: 'Test title',
                    content: 'Test content',
                    datetime: 'Test date',
                },
            }}
        />
    );
    expect(screen.getByText('Back', { exact: false })).toBeTruthy();
});

test('check for same content page snapshot', () => {
    const tree = renderer
        .create(
            <ContentScreen
                route={{
                    params: {
                        title: 'Test title',
                        content: 'Test content',
                        datetime: 'Test date',
                    },
                }}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
