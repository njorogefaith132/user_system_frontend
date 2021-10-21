import axios from 'axios'
import {ADD_TASK, ADD_TASK_FAILED, DELETE_TASK}  from '../types/types'



export const addTaskAction = addedtask =>{
    return{
        type: ADD_TASK,
        addedtask
    }

}

export const addTaskfailed = error =>{
    return{
        type: ADD_TASK_FAILED,
        payload: error
    }
}

export const  deleteTask = id =>{
    return{
        type: DELETE_TASK,
        payload: id
    }
}
export const addTask =  addedtask => async(dispatch)  =>{

    try {
       const response = await axios.post("http://localhost:5002/project/task/create", addedtask)
       const {task_id, project_name, task, start_date, end_date } = response.data.message.task
       dispatch(addTask(task_id,  project_name, task, start_date, end_date))

    } catch (error) {
        dispatch(addTaskfailed(error))
    }
}