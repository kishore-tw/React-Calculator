import { connect } from 'react-redux'
import { setInputValues, setOutput} from '../redux/actions'
import GetOutput from './GetOutput'

const mapStateToProps = state => ({
    inputOne : state.inputOne,
    inputTwo : state.inputTwo,
    output : state.output,
    hasError : state.hasError
})

const mapDispatchToProps = dispatch => ({
    setOutput : (inputType) => dispatch(setOutput(inputType)),
    setInputValues: (inputType, value) => dispatch(setInputValues(inputType, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(GetOutput)