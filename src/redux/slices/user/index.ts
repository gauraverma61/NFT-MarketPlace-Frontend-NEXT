import { createSlice } from "@reduxjs/toolkit";


interface IUser {
    address?: string;
    customer?: string;
}

const initialState: IUser = {
};

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        login: (state, {payload})=>{
            state.address = payload;
        },
        setCustomer: (state, {payload})=>{
            state.customer = payload;
        },
        logout: (state) => {
            state.address = undefined;
            state.customer = undefined;
        }
    }
})

export const { login, setCustomer, logout } = userSlice.actions;

export default userSlice.reducer; 