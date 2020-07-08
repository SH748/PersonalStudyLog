import {connect} from 'react-redux'
import Coutn from '../pages/Coutn'

import obj from '../store/actions'

// const mapState=state=>({
//     count:state
// })
// const mapDispatch=dispatch=>({
//     onAdd:(data=1)=>{
//         dispatch(addAction(data))
//     },
//     onLess:(data=1)=>{
//         dispatch(lessAction  (data))
//     }
// })
/**
 * action 
 * function actionCeater(data){
 *  return {
 *      type:XXX,
 *      data
 *  }
 * }
 *      |
 *      V
 * XXX(data)=>{
 * dispatch(actionCeater(data))
 * }
 * 
 * 
 */

// const WithCount = connect(mapState,mapDispatch)(Coutn)
const WithCount = connect(state=>({count:state}),{...obj})(Coutn)

export default WithCount
