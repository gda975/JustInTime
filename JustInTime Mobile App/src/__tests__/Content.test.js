import { render, screen } from '@testing-library/react-native';
import ContentScreen from './../../src/navigation/screens/Content';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

const parseDateTime = (datetime) => {
    const date = new Date(datetime);

    const month = date.toLocaleDateString('en-us', {
        month: 'long',
    });

    const dayNum = date.getDate();

    const time = new Intl.DateTimeFormat('en-us', {
        timeStyle: 'short',
    }).format(date);

    return `${month} ${dayNum}, ${time}`;
};

test('integration check content page renders properly', () => {
    let testTitle = 'test title randomly generated';
    render(
        <ContentScreen
            route={{
                params: {
                    title: testTitle,
                    content: 'Test content',
                    datetime: new Date(),
                },
            }}
        />
    );
    expect(screen.getByText(testTitle)).toBeTruthy();
    expect(screen.getByText('Test content')).toBeTruthy();
    expect(screen.getByText(parseDateTime(new Date()))).toBeTruthy();
});

test('check that back button exists', () => {
    render(
        <ContentScreen
            route={{
                params: {
                    title: 'Test title',
                    content: 'Test content',
                    datetime: new Date(),
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
                        datetime: new Date(),
                    },
                }}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
