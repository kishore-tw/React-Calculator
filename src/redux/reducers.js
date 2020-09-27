import {SET_INPUT_ONE,SET_INPUT_TWO, OUTPUT, CLEAR, ERROR} from '../redux/action_types'

const initialState = {
    inputOne : '',
    inputTwo : '',
    output : 0,
    hasError : false
  }
  
  function calculatorApp(state = initialState, action) {
    switch (action.type) {
        case SET_INPUT_ONE:{
            return {
                ...state,
                inputOne: action.data,
                hasError: false
            }
        }
        case SET_INPUT_TWO:{
          return {
              ...state,
              inputTwo: action.data,
              hasError: false
          }
      }
      case OUTPUT:{
        return {
            ...state,
            output: action.data
        }
    }
        case CLEAR:{
            return {
                ...state,
                hasError: false,
                inputOne : '',
                inputTwo : '',
                output: 0
            }
        }
        case ERROR:{
            return {
                ...state,
                hasError: true,
                output: 0
            }
        }
        default:
          return state
      }
  }

  export default calculatorApp