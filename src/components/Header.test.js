import React from 'react'
import renderer from 'react-test-renderer';
import Header from './Header'

test('should render header component', () => {
const header = renderer.create(<Header />);
expect(header).toMatchSnapshot();
})