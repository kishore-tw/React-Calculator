import reducer from '../redux/reducers'
import * as types from './action_types'

describe('test suite for reducer', () => {
    test('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        {hasError: false, inputOne: "", inputTwo: "", output: 0})
    })

    test('should handle set input one', () => {
        const mockInputOne = 4
        expect(
          reducer([], {
            type: types.SET_INPUT_ONE,
            data: 4
          })
        ).toEqual({
            inputOne: mockInputOne,
            hasError: false
          })
    })

    test('should handle set input two', () => {
        const mockInputTwo = 4
        expect(
          reducer([], {
            type: types.SET_INPUT_TWO,
            data: mockInputTwo
          })
        ).toEqual({
            inputTwo: mockInputTwo,
            hasError: false
          })
    })

    test('should handle output', () => {
        const mockOutput = 4
        expect(
          reducer([], {
            type: types.OUTPUT,
            data: mockOutput
          })
        ).toEqual({
            output: mockOutput,
            hasError: false
          })
    })

    test('should handle validation error', () => {
        expect(
          reducer([], {
            type: types.CLEAR
          })
        ).toEqual({
            hasError: false,
            inputOne : '',
            inputTwo : '',
            output: 0
          })
    })

    test('should handle error', () => {
        expect(
          reducer([], {
            type: types.ERROR
          })
        ).toEqual({
            hasError: true,
            output: 0
          })
    })

    test('should handle error', () => {
      expect(
        reducer([], {
          type: types.VALIDATION_ERROR
        })
      ).toEqual({
        hasError: 'validation_error'
        })
  })
})