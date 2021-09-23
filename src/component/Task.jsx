import '../styling/task.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {addTask} from '../redux/actions/task'

const AddTask = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const state = useSelector(state => state.state)
    
    const [task , setTask] = useState({
        taskname : ''
    })

    const handleChange = (e)=>{
        setTask(prev => ({...prev,  [e.target.name]: e.target.value}))
    }

    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(addTask(task))
    }

    // useEffect(() => {
        
    //     console.log('>>>>>>>>>', state.task.id);
    // }, [])


    return (
        <div className="task-form">
            <form onSubmit={handleSubmit}>
                <h2>ADD TASK</h2>
                <label htmlFor="">Task Name</label>
                <input 
                type="text" 
                name="taskname"
                placeholder="input task"
                onChange={handleChange}
                
                />
                <button>Add</button>
            </form>
            
        </div>
    )
}
export default AddTask
