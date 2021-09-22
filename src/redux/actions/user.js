import {GET_USER_SUCCESS, GET_USER_FAILED, GET_USER_REQUEST} from '../types/types'
import axios from 'axios'


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
        const {id,username,password, token} = response.data.message.user

        dispatch(getUserSuccess({id,username,password}))

    } catch (error) {
       dispatch(getUserFailed(error))
        
    }
}
