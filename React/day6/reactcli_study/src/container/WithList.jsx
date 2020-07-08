import { connect } from 'react-redux'
import List from '../pages/List'

import actions from '../store/userActions'

const WithList = connect(state => ({ ...state }), { changeuserActionAsync: actions.changeuserActionAsync, changeFilterAction: actions.changeFilterAction })(List)

export default WithList
