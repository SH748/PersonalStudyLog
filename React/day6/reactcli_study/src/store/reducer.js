export default function reducer(state = 0, action) {

    switch (action.type) {
        case "add":
            return state + action.data;
            break;
        case "less":
            return state - action.data
            break;
        default:
            return state;
    }

}