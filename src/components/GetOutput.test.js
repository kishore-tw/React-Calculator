import React from 'react'
import renderer from 'react-test-renderer';
import GetOutput from './GetOutput'

test('should render get output component', () => {
    const mockInputOne = 2
    const mockInputTwo = 3
    const mockOutput = 5
    const mockHasError = true

    const getOutput = renderer.create(<GetOutput inputOne={mockInputOne} inputTwo={mockInputTwo} output= {mockOutput} hasError = {mockHasError}/>);
    expect(getOutput).toMatchSnapshot();
})