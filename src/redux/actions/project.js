import axios from 'axios'
import {ADD_PROJECT,ADD_PROJECT_FAILED, DELETE_PROJECT, GET_PROJECT_FAILED, GET_PROJECT_REQUEST,GET_PROJECT_SUCCESS}  from '../types/types'



export const addProjectAction = project =>{
    return{
        type: ADD_PROJECT,
        project
    }

}

export const addprojectfailed = error =>{
    return{
        type: ADD_PROJECT_FAILED,
        payload: error
    }
}

export const  deleteProject = id =>{
    return{
        type: DELETE_PROJECT,
        payload: id
    }
}
export const getProjectRequest = () =>{
    return ({
        type: GET_PROJECT_REQUEST
    })
}

export const getProjectSuccess = (project) =>{
    return( {
        type: GET_PROJECT_SUCCESS,
        project
    })
}
export const getProjectFailed =(error) =>{
    return ({
        type: GET_PROJECT_FAILED,
        payload: error
    })
}
export const addproject =  project => async(dispatch)  =>{

    try {
       const response =  await axios.post("http://localhost:5002/user/projects/create", project)

       const {project_id,projectname,username,project_description } = response.data.message.project

       dispatch(addProjectAction({project_id,projectname,username,project_description}))

    } catch (error) {
        dispatch(addprojectfailed(error))
    }
}

export const getproject =  username => async(dispatch)  =>{
    dispatch(getProjectRequest());

    try {
       const response =  await axios.post(`http://localhost:5002/user/projects/${username}`)

       const {project_id,project_name,project_description } = response.data.project

       dispatch(getProjectSuccess({project_id,project_name,project_description}))

    } catch (error) {
        dispatch(getProjectFailed(error))
    }
}