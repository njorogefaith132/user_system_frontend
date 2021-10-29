import axios from 'axios'
import {ADD_TASK, ADD_TASK_FAILED, DELETE_TASK, GET_TASKS_FAILED, GET_TASKS_REQUEST, GET_TASKS_SUCCESS, GET_TASK_FAILED, GET_TASK_REQUEST, GET_TASK_SUCCESS}  from '../types/types'



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


export const getTasksRequest = () =>{
    return ({
        type: GET_TASKS_REQUEST
    })
}

export const getTasksSuccess = (tasks) =>{
    return( {
        type: GET_TASKS_SUCCESS,
        tasks
    })
}
export const getTasksFailed =(error) =>{
    return ({
        type: GET_TASKS_FAILED,
        payload: error
    })
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
export const getProjectTasks =  projectname => async(dispatch)  =>{
    dispatch(getTasksRequest());

    try {
       const response =  await axios.get(`http://localhost:5002/task/${projectname}`)
    //    console.log(response.data);

       const tasks = response.data

       dispatch(getTasksSuccess(tasks))

    } catch (error) {
        dispatch(getTasksFailed(error))
    }
}