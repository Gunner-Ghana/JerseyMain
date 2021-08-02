import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const login = createAsyncThunk(
    'login/data',
    async(
        {
            username,
            password
        },
        thunkAPI
    )=>{
        try {
            let response = await axios.post('/api/login',
            {
                username,
                password
            }
            );
            let data = await response.data
            if(response.status == 200){
                //console.log(data);
                return data;
            }else {
                thunkAPI.rejectWithValue(data)
            }

        }
        catch(e){
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

export const signup = createAsyncThunk(
    'signup/data',
    async(
        {
            username,
            password
        },
        thunkAPI
    )=>{
        try {
            let response = await axios.post('/api/register',
            {
                username,
                password
            }
            );
            let data = await response.data
            if(response.status == 200){
                //console.log(data);
                return data;
            }else {
                thunkAPI.rejectWithValue(data)
            }

        }
        catch(e){
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)


export const checkAuth = createAsyncThunk(
    'checkauth/data',
    async(
        {
        },
        thunkAPI
    )=>{
        try {
            let response = await axios.get('/api/auth',
            {
            }
            );
            let data = await response.data
            if(response.status == 200){
                //console.log(data);
                return data;
            }else {
                thunkAPI.rejectWithValue(data)
            }

        }
        catch(e){
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

export const logout = createAsyncThunk(
    'userlogout/data',
    async(
        {
        },
        thunkAPI
    )=>{
        try {
            let response = await axios.get('/api/logout',
            {
            }
            );
            let data = await response.data
            if(response.status == 200){
                //console.log(data);
                return data;
            }else {
                thunkAPI.rejectWithValue(data)
            }

        }
        catch(e){
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        success: false,
        isLoading: false,
        wasAuth: false
    },
    reducers: {
        clearState: (state)=>{
            state.isAuth = false
            return state;
        }
    },
    extraReducers: {
        [login.pending]: (state,{payload})=>{

        },
        [login.rejected]: (state,{payload})=>{

        },
        [login.fulfilled]: (state,{payload})=>{
            state.isAuth = payload.isAuth
            state.isLoading= true
            //console.log(payload.isAuth
        },
        [signup.pending]: (state,{payload})=>{

        },
        [signup.rejected]: (state,{payload})=>{

        },
        [signup.fulfilled]: (state,{payload})=>{
            state.isAuth = payload.isAuth
            state.success = payload.success
            console.log(payload)
            //console.log(payload.isAuth
        },
        [checkAuth.pending]: (state,{payload})=>{

        },
        [checkAuth.rejected]: (state,{payload})=>{

        },
        [checkAuth.fulfilled]: (state,{payload})=>{
            state.wasAuth = payload.wasAuth
            //console.log(payload.isAuth
        },
        [logout.pending]: (state,{payload})=>{

        },
        [logout.rejected]: (state,{payload})=>{

        },
        [logout.fulfilled]: (state,{payload})=>{
            //state.wasAuth = payload.wasAuth
            //console.log(payload.isAuth
        }
    }
})

export const {clearState} = userSlice.actions;
export const userSelector = (state)=> state.user;