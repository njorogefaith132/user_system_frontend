// import { configureStore } from "@reduxjs/toolkit";

import userReducer from  './reducers/user'
import projectReducer from "./reducers/project";
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import taskReducer from './reducers/task';



// export default configureStore(userReducer, applyMiddleware(thunk))
export default function configureStore(){
    const store = createStore(
        combineReducers({
            user: userReducer,
            project: projectReducer,
            task: taskReducer
        }),
        applyMiddleware(thunk)
    )
    return store
}

