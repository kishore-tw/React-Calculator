import React from "react";
import renderer from 'react-test-renderer';
import Calculator from './Calculator'

describe(' test suite for Calculator', () => {
    test('should render calculator component for given parameters', () => {
        const mockInputOne = 2;
        const mockInputTwo = 3;
        const mockOutput = 5;
        const mockHasError = false;
        const mockCalculator = renderer.create(<Calculator inputOne={mockInputOne} inputTwo = {mockInputTwo} output = {mockOutput} 
            hasError={mockHasError} />);
        expect(mockCalculator).toMatchSnapshot();
    })
});


