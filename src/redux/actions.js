import {SET_INPUT_ONE,SET_INPUT_TWO, OUTPUT, CLEAR, ERROR} from '../redux/action_types'
import store from '../redux/store'

export function setOutput(inputType) {
    var input1 = store.getState().inputOne
    var input2 = store.getState().inputTwo

    if (inputType === "clear"){
        return {
            type: CLEAR
        }
    }

    if(input1 === '' || input2 === ''){
        console.log("entry")
        return {
            type: ERROR
        }
    }
    if (inputType === "+"){
        return {
            type: OUTPUT,
            data: parseInt(input1) + parseInt(input2) 
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
    if (inputType === "/"){
        return {
            type: OUTPUT,
            data: input1 / input2
        }
    }
   
}


export function setInputValues(inputType, value) {
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