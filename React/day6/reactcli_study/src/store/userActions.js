import axios from 'axios'

const CHANGEUSER = "CHANGEUSER"
const CHANGELOADING = "CHANGELOADING"
const CHANGEERROR = "CHANGEERROR"
const CHNAGEFILTER = "CHANGEFILTER"

function changeuserActionAsync(data) {
    return dispatch => {
        dispatch(changeLoadingAction(true))
        axios
        .get('http://localhost:5000/search/users', {
          params: {
            searchname: data
          }
        })
        .then(res => {
            dispatch(changeuserAction(res.data.items))
        })
        .catch(err => {
        //   console.log(err)
          dispatch(changeErrorAction(false))
        })
        
    }
}

function changeuserAction(data){
   return {
        type: CHANGEUSER,
        data
    }
}
function changeLoadingAction(data) {
    return {
        type: CHANGELOADING,
        data
    }
}

function changeErrorAction(data) {
    return {
        type: CHANGEERROR,
        data
    }
}


function changeFilterAction(data) {
    return {
        type: CHNAGEFILTER,
        data
    }
}




export default { changeuserActionAsync, changeLoadingAction, changeErrorAction,changeFilterAction }