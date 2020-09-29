import * as actions from '../redux/actions'
import * as action_types from '../redux/action_types'

describe("test suite for actions", () => {
    afterEach(() => {
      // fetchMock.restore()
    })

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

  test("test to trigger action to set input two", () => {
    const mockInputTwo = 4
    const expectedAction = {
      type: action_types.SET_INPUT_TWO,
      data: mockInputTwo
    }
    expect(actions.setInputValues("inputTwo",mockInputTwo)).toEqual(expectedAction)
})

    test("test to trigger action for addition", () => {
        const expectedErrorAction = {
          type: action_types.ERROR
        }
        expect(actions.setOutput("+")).toEqual(expectedErrorAction)
    })
})