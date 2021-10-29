import {ADD_TASK, ADD_TASK_FAILED, DELETE_TASK, GET_TASKS_FAILED, GET_TASKS_REQUEST, GET_TASKS_SUCCESS}  from '../types/types'


const initialState ={
    addedtask : {},
    tasks:[],
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
                addedtask : {},
                error: action.payload
            }
        case DELETE_TASK:
                const newstate = state.addedtask.filter(p=>p.id===action.payload)
                return{
                    newstate
                }
        case GET_TASKS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_TASKS_SUCCESS:
            return{
            ...state,
            loading:false,
            tasks: action.tasks
        }
        case GET_TASKS_FAILED:
            return{
            loading: false,
            tasks: [],
            error: action.payload
        }
            
    
        default: return state
    }

}

export default taskReducer