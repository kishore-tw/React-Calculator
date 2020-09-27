import React from 'react'
import renderer from 'react-test-renderer';
import GetOutput from './GetOutput'

test('should render get output component', () => {
    const getOutput = renderer.create(<GetOutput inputOne={2} inputTwo={3} output= {5} hasError = {true}/>);
    expect(getOutput).toMatchSnapshot();
})