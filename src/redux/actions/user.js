import {GET_USER_SUCCESS, GET_USER_FAILED, GET_USER_REQUEST, ADD_USER_FAILED,ADD_USER_SUCCESS} from '../types/types'
import axios from 'axios'

export const addUserAction = (user) =>{
    return ({
        type: ADD_USER_SUCCESS,
        user
    })
}
export const addUserFailed = (error) =>{
    return ({
        type: ADD_USER_FAILED,
        payload: error
    })
}

export const addingUser =  (user) => async (dispatch) =>{

    try {
        
        const response = await axios.post("http://localhost:5001/users/register",user)

        const {id,username,password, token} = response.data.message.user
        //  localStorage.setItem('token', token)

        dispatch(addUserAction({id,username,password,token}))

    } catch (error) {
       dispatch(addUserFailed(error))
        
    }
}


export const getUserRequest = () =>{
    return ({
        type: GET_USER_REQUEST
    })
}

export const getUserSuccess = (user) =>{
    return( {
        type: GET_USER_SUCCESS,
        user
    })
}
export const getUserFailed =(error) =>{
    return ({
        type: GET_USER_FAILED,
        payload: error
    })
}

export const fetchinguser =  (user) => async (dispatch) =>{
    dispatch(getUserRequest())

    try {
        
        const response = await axios.post("http://localhost:5001/users/login",user)

        console.log(response.data.user);
        const {id,username,password, token, usertype} = response.data.user
        console.log(user)
         localStorage.setItem('token', token)

        dispatch(getUserSuccess({id,username,password,token,usertype}))

    } catch (error) {
       dispatch(getUserFailed(error))
        
    }
}
