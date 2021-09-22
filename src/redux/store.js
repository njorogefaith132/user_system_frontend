// import { configureStore } from "@reduxjs/toolkit";

import userreducer from "./reducers/userreducer";
import userReducer from  './reducers/user'
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";



// export default configureStore(userReducer, applyMiddleware(thunk))
export default function configureStore(){
    const store = createStore(
        combineReducers({
            user: userReducer
        }),
        applyMiddleware(thunk)
    )
    return store
}

