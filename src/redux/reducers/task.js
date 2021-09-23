import {ADD_TASK, ADD_TASK_FAILED, DELETE_TASK}  from '../types/types'


const initialState ={
    addedtask : [],
    error: ''

}

const taskReducer = (state= initialState, action) =>{

    switch (action.type) {
        case ADD_TASK:
            return{
                ...state, addedtask: action.addedtask
            }
        case ADD_TASK_FAILED:
            return {
                addedtask : [],
                error: action.payload
            }
        case DELETE_TASK:
                const newstate = state.addedtask.filter(p=>p.id===action.payload)
                return{
                    newstate
                }
    
        default: return state
    }

}

export default taskReducer