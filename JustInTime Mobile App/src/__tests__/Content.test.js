import { render, screen } from '@testing-library/react-native';
import ContentScreen from './../../src/navigation/screens/Content';

jest.useFakeTimers();

const parseDateTime = (datetime) => {
    const date = new Date('2022/11/28 18:24:43');

    const month = date.toLocaleDateString('en-us', {
        month: 'long',
    });

    const dayNum = date.getDate();

    const time = new Intl.DateTimeFormat('en-us', {
        timeStyle: 'short',
    }).format(date);

    return `${month} ${dayNum}${
        new Date().getFullYear() !== date.getFullYear()
            ? ', ' + date.getFullYear()
            : ''
    } at ${time}`;
};

test('integration check content page renders properly', () => {
    let testTitle = 'test title randomly generated';
    render(
        <ContentScreen
            route={{
                params: {
                    title: testTitle,
                    content: 'Test content',
                    datetime: new Date('2022/11/28 18:24:43'),
                },
            }}
        />
    );
    expect(screen.getByText(testTitle)).toBeTruthy();
    expect(screen.getByText('Test content')).toBeTruthy();
    expect(
        screen.getByText(parseDateTime(new Date('2022/11/28 18:24:43')))
    ).toBeTruthy();
});

test('check that back button exists', () => {
    render(
        <ContentScreen
            route={{
                params: {
                    title: 'Test title',
                    content: 'Test content',
                    datetime: new Date('2022/11/28 18:24:43'),
                },
            }}
        />
    );
    expect(screen.getByText('Back', { exact: false })).toBeTruthy();
});
