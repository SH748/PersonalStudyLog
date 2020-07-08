function addAction(data){
    return {
        type:"add",
        data
    }
}
function lessAction(data){
    return {
        type:"less",
        data
    }
}
function addActionAsync(data){
    return dispatch=>{
        setTimeout(() => {
            dispatch({ type:"add",data})
        }, 2000);
    }
}
function lessActionAsync(data){
    return dispatch=>{
        setTimeout(() => {
            dispatch({ type:"less",data})
        }, 2000);
    }
}

export default {addAction,lessAction,addActionAsync,lessActionAsync}