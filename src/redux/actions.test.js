import * as actions from '../redux/actions'
import * as action_types from '../redux/action_types'
import store from './store'
jest.mock('./store')

describe("test suite for actions", () => {

  beforeEach(() => {
    const mockState = {
        inputOne:10,
        inputTwo:5
      }
    store.getState = () => mockState
    });
  
    test("test to trigger action for clear", () => {
        const expectedErrorAction = {
          type: action_types.CLEAR,
          data: 0
        }
        expect(actions.setOutput("clear")).toEqual(expectedErrorAction)
    })

    test("test to trigger action to set input one", () => {
      const mockInputOne = 4
      const expectedAction = {
        type: action_types.SET_INPUT_ONE,
        data: mockInputOne
      }
      expect(actions.setInputValues("inputOne",mockInputOne)).toEqual(expectedAction)
    })

    test("test to trigger action to set input one", () => {
      const mockInputOne = 'invalidInput'
      const expectedAction = {
        type: action_types.VALIDATION_ERROR
      }
      expect(actions.setInputValues("inputOne",mockInputOne)).toEqual(expectedAction)
    })

    test("test to trigger action to set input two", () => {
      const mockInputTwo = 'invalidInput'
      const expectedAction = {
        type: action_types.VALIDATION_ERROR
      }
      expect(actions.setInputValues("inputTwo",mockInputTwo)).toEqual(expectedAction) 
    })

  test("test to trigger action to set input two", () => {
    const mockInputTwo = 4
    const expectedAction = {
      type: action_types.SET_INPUT_TWO,
      data: mockInputTwo
    }
    expect(actions.setInputValues("inputTwo",mockInputTwo)).toEqual(expectedAction) 
  })

  test("test to trigger action for subtract", () => {
    const expectedErrorAction = {
      type: action_types.OUTPUT,
      data: 15
    }
    expect(actions.setOutput("+")).toEqual(expectedErrorAction)
  })

  test("test to trigger action for subtract", () => {
      const expectedErrorAction = {
        type: action_types.OUTPUT,
        data: 5
      }
      expect(actions.setOutput("-")).toEqual(expectedErrorAction)
  })

  test("test to trigger action for multiply", () => {
      const expectedErrorAction = {
        type: action_types.OUTPUT,
        data: 50
      }
      expect(actions.setOutput("*")).toEqual(expectedErrorAction)
  })

  test("test to trigger action for divide", () => {
      const expectedErrorAction = {
        type: action_types.OUTPUT,
        data: 2
      }
      expect(actions.setOutput("/")).toEqual(expectedErrorAction)
  })

  test("test to trigger action for divide", () => {
    const mockState = {
      inputOne:0,
      inputTwo:0
    }
    store.getState = () => mockState
    const expectedErrorAction = {
      type: action_types.VALIDATION_ERROR,
      data: ''
    }
    expect(actions.setOutput("/")).toEqual(expectedErrorAction)
  })

  test("test to trigger action for error", () => {
    const mockState = {
      inputOne:'',
      inputTwo:''
    }
    store.getState = () => mockState
    const expectedErrorAction = {
      type: action_types.ERROR
    }
    expect(actions.setOutput("/")).toEqual(expectedErrorAction)
  })
 
})