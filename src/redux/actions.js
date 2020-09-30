import {SET_INPUT_ONE,SET_INPUT_TWO, OUTPUT, CLEAR, ERROR, VALIDATION_ERROR} from '../redux/action_types'
import store from '../redux/store'

export function setOutput(inputType) {
    var input1 = store.getState().inputOne
    var input2 = store.getState().inputTwo
    
    if (inputType === "clear"){
        return {
            type: CLEAR,
            data: 0
        }
    }

    if(input1 === '' || input2 === ''){
        return {
            type: ERROR
        }
    }
    
    input1 = Number(input1)
    input2 = Number(input2)

    if (inputType === "+"){
        return {
            type: OUTPUT,
            data: input1 + input2 
        }
    }
    if (inputType === "-"){
        return {
            type: OUTPUT,
            data: input1 - input2
        }
    }
    if (inputType === "*"){
        return {
            type: OUTPUT,
            data: input1 * input2
        }
    }
    if (inputType === "/" && input1 === 0  && input2 === 0){
        return {
            type: VALIDATION_ERROR,
            data: ''
        }
    }
    if (inputType === "/" ){
        return {
            type: OUTPUT,
            data: input1 / input2
        }
    }
   
}

export function setInputValues(inputType, value) {
    if(isNaN(value)){
        return{
            type: VALIDATION_ERROR
        }
    }
    if (inputType === "inputOne"){
        return {
            type: SET_INPUT_ONE,
            data: value
        }
    }
    if (inputType === "inputTwo"){
        return {
            type: SET_INPUT_TWO,
            data: value
        }
    }
}