import axios from 'axios'
import {ADD_PROJECT,ADD_PROJECT_FAILED, DELETE_PROJECT, }  from '../types/types'



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
export const addproject =  project => async(dispatch)  =>{

    try {
       const response =  await axios.post("http://localhost:5001/user/project/create", project)

       const {project_id,projectname,username,project_description } = response.data.message.project

       dispatch(addProjectAction({project_id,projectname,username,project_description}))

    } catch (error) {
        dispatch(addprojectfailed(error))
    }
}