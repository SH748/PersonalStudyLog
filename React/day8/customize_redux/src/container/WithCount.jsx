import {connect} from '../react-redux'
import Coutn from '../pages/Coutn'

import obj from '../store/actions'

const WithCount = connect(state=>({...state}),{...obj})(Coutn)

export default WithCount
