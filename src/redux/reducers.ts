import { combineReducers } from "@reduxjs/toolkit";
import user from "./slices/user";

import store from './store'

const rootReducer = combineReducers({user,})

export type RootState = ReturnType <typeof store.getState>

export default rootReducer;