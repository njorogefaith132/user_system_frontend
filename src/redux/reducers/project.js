import {ADD_PROJECT, ADD_PROJECT_FAILED, DELETE_PROJECT}  from '../types/types'


const initialState ={
    project : {},
    error: ''

}

const projectReducer = (state= initialState, action) =>{

    switch (action.type) {
        case ADD_PROJECT:
            return{
                ...state, project: action.project
            }
        case ADD_PROJECT_FAILED:
            return {
                project : {},
                error: action.payload
            }
        case DELETE_PROJECT:
                const newstate = state.project.filter(p=>p.id===action.payload)
                return{
                    newstate
                }
    
        default: return state
    }

}

export default projectReducer