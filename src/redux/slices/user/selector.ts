import { RootState } from "@redux/reducers";
import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state: RootState)=>state.rootReducer.user;

export const userIsLoggedIn = createSelector(selectSelf, (state):boolean=> !!state.address);
export const selectUserAddress = createSelector( selectSelf , (state): string|undefined =>state.address)