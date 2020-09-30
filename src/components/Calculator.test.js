import React from "react";
import renderer from 'react-test-renderer';
import Calculator from './Calculator'
import configureStore from 'redux-mock-store';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

const mockStore = configureStore();
const intialState = {
 inputOne:5,
}
const store = mockStore(intialState);

describe(' test suite for Calculator', () => {
    let container = null;
    beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    });

    afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    });

    test('should render calculator component for given parameters', () => {
        const mockInputOne = 2;
        const mockInputTwo = 3;
        const mockOutput = 5;
        const mockHasError = false;
        const mockCalculator = renderer.create(<Calculator inputOne={mockInputOne} inputTwo = {mockInputTwo} output = {mockOutput} 
            hasError={mockHasError} />);
        expect(mockCalculator).toMatchSnapshot();
    })

    xtest("renders with or without a name", () => {
        act(() => {
          render(<Calculator />, container);
        });
        enzymeWrapper = shallow(<Calculator store={store}/>);
        // expect(container.textContent).toBe(" +  -  *  /  Clear OutputOutput");
        expect(store.getActions()).toEqual(expectedActions)

      });
    
    
});


