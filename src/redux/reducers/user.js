import { GET_USER_FAILED, GET_USER_REQUEST,GET_USER_SUCCESS, ADD_USER_SUCCESS, ADD_USER_FAILED} from '../types/types'

const initialState ={
    user: {},
    loading: true,
    error : ''
}

const userReducer = ( state = initialState, action ) =>{
    switch (action.type) {
        case ADD_USER_SUCCESS:
            return{
                ...state, 
                user: action.user,
                loading: false
            }
        case ADD_USER_FAILED:
            return{
                user: {},
                error: action.payload,
                loading: false

            }
        case GET_USER_REQUEST:
            return{
                loading: true
            }
        case GET_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                user : action.user
            }

        case GET_USER_FAILED:
            return{
                loading: false,
                user: {},
                error: action.payload
            }

    
        default: return  state
          
    }


}

export default userReducer
