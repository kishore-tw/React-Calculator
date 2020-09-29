import { createStore, applyMiddleware } from 'redux'
import calculatorApp from '../redux/reducers'

export default createStore (calculatorApp, applyMiddleware())