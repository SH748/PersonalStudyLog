const todosList = (state=0, action) => {
    console.log(action);
    
    return [{
            id: 1,
            value: "planA",
            isDone: false
        },
        {
            id: 2,
            value: "planB",
            isDone: false
        },
        {
            id: 3,
            value: "planC",
            isDone: false
        },
        {
            id: 4,
            value: "planD",
            isDone: false
        },
    ]
}
export default todosList