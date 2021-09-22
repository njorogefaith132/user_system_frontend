import { GET_USER_FAILED, GET_USER_REQUEST,GET_USER_SUCCESS} from '../types/types'

const initialState ={
    user: {},
    loading: true,
    error : ''
}

const userReducer = ( state = initialState, action ) =>{
    switch (action.type) {
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
                user: [],
                error: action.payload
            }

    
        default: return  state
          
    }


}

export default userReducer
