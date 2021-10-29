import {ADD_PROJECT, ADD_PROJECT_FAILED, DELETE_PROJECT, GET_PROJECTS_FAILED, GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECT_FAILED, GET_PROJECT_REQUEST,GET_PROJECT_SUCCESS}  from '../types/types'


const initialState ={
    project : {},
    projects: [],
    loading:true,
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
        case GET_PROJECT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_PROJECT_SUCCESS:
        return{
            ...state,
            loading:false,
            project: action.project
        }
        case GET_PROJECT_FAILED:
        return{
            loading: false,
            project: {},
            error: action.payload
        }
        case GET_PROJECTS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_PROJECTS_SUCCESS:
            return{
            ...state,
            loading:false,
            projects: action.projects
        }
        case GET_PROJECTS_FAILED:
            return{
            loading: false,
            projects: [],
            error: action.payload
        }
    
        default: return state
    }

}

export default projectReducer