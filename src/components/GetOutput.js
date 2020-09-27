import React,  { useEffect } from 'react'
import Calculator from './Calculator'

function GetOutput({ inputOne, inputTwo, output, hasError, setInputValues, setOutput}) {
    return(
    <div>
    <Calculator inputOne={inputOne} inputTwo={inputTwo} output= {output} hasError = {hasError} 
    onValueChange={setInputValues} onClickChange={setOutput} />
    </div>)
}

export default GetOutput;