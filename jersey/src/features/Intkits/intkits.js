import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getIntKits = createAsyncThunk(
    'intkits/data',
    async({},
        thunkAPI)=>{
            try{
                const response = await axios.get('/api/intkits');
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

export const intKitSlice = createSlice({
    name: 'intkits',
    initialState: {
        success: false,
        ikits: null,
    },
    reducers: {
        clearState: (state)=>{
            state.success=false
            state.ikits = ''
        }
    },
    extraReducers: {
        [getIntKits.pending]: (state,{payload})=>{

        },
        [getIntKits.rejected]: (state,{payload})=>{

        },
        [getIntKits.fulfilled]: (state,{payload})=>{
                console.log("first",state.ikits)
                state.ikits= payload
                console.log("Kits",state.ikits)
        },
     
    }
})

export const {clearState} = intKitSlice.actions;
export const intKitsSelector = (state)=> state.intkits;
