import axios from 'axios'
import {ADD_PROJECT,ADD_PROJECT_FAILED, DELETE_PROJECT, GET_PROJECTS_FAILED, GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECT_FAILED, GET_PROJECT_REQUEST,GET_PROJECT_SUCCESS}  from '../types/types'



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
export const getProjectsRequest = () =>{
    return ({
        type: GET_PROJECTS_REQUEST
    })
}

export const getProjectsSuccess = (projects) =>{
    return( {
        type: GET_PROJECTS_SUCCESS,
        projects
    })
}
export const getProjectsFailed =(error) =>{
    return ({
        type: GET_PROJECTS_FAILED,
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

export const getAllProjects =  () => async(dispatch)  =>{
    dispatch(getProjectsRequest());

    try {
       const response =  await axios.get("http://localhost:5002/user/projects/all")
    //    console.log(response.data);

       const projects = response.data

       dispatch(getProjectsSuccess(projects))

    } catch (error) {
        dispatch(getProjectsFailed(error))
    }
}