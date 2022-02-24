import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/user";

import store from './store'

const rootReducer = combineReducers({userSlice,})

export type RootState = ReturnType <typeof store.getState>

export default rootReducer;