import renderer from 'react-test-renderer';
import Home from '../navigation/screens/Home';
import { render } from '@testing-library/react-native';

test('should first', () => {
    const tree = renderer.create(<Home />).toJSON();
    // expect(tree).toMatchSnapshot();
});
