import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getOtherKits = createAsyncThunk(
    'otherkits/data',
    async({},
        thunkAPI)=>{
            try{
                const response =  await axios.get('/api/otherKits');
                let data = await response.data;
            if (response.status === 200) {
                //console.log(data)
                return data
              } else {
                return thunkAPI.rejectWithValue(data);
              }
        }
        catch(e){
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const otherKitSlice = createSlice({
    name: 'otherkits',
    initialState: {
        success: false,
        otherKits: null,
    },
    reducers: {
        clearState: (state)=>{
            state.success=false
            state.otherKits = null
        }
    },
    extraReducers: {
        [getOtherKits.pending]: (state,{payload})=>{

        },
        [getOtherKits.rejected]: (state,{payload})=>{

        },
        [getOtherKits.fulfilled]: (state,{payload})=>{
            state.otherKits = payload
        },
        
    }
})

export const {clearState} = otherKitSlice.actions;
export const otherKitsSelector = (state)=> state.otherKits;
