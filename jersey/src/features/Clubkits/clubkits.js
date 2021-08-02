import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getClubKits = createAsyncThunk(
    'clubkits/data',
    async({},
        thunkAPI)=>{
            try{
                const response =   await axios.get('/api/clubkits');
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

export const clubKitSlice = createSlice({
    name: 'clubkits',
    initialState: {
        success: false,
        kits: null,
    },
    reducers: {
        clearState: (state)=>{
            state.success=false
            state.kits = null
        }
    },
    extraReducers: {
        [getClubKits.pending]: (state,{payload})=>{

        },
        [getClubKits.rejected]: (state,{payload})=>{

        },
        [getClubKits.fulfilled]: (state,{payload})=>{
                state.kits = payload
                
        },
        
    }
})

export const {clearState} = clubKitSlice.actions;
export const clubKitsSelector = (state)=> state.clubkits;
