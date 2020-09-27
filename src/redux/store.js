import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';
import calculatorApp from '../redux/reducers'

export default createStore (calculatorApp, applyMiddleware())