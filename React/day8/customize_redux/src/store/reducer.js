let initState = {
    count:0
}
export default function reducer(state = initState, action) {

    switch (action.type) {
        case "add":
            console.log(state);
            
            return {count:state.count + action.data};
            break;
        case "less":
            return{count:state.count - action.data};
            break;
        default:
            return state;
    }

}