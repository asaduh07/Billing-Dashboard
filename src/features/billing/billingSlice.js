import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const INITIAL_STATE = {
    fromDate: '',
    toDate: '',
    companies:[],
    loading: false,
    error: null
}


export const fetchDataAsync = createAsyncThunk('billing/fetch', async (_, {getState, rejectWithValue }) => {
    try {
        const state= getState().billing;
        const fromDate= state.fromDate;
        const toDate= state.toDate;
        console.log(fromDate,toDate);
      
        const response = await axios.get(`${process.env.REACT_APP_URL}from_date=${fromDate}&to_date=${toDate}`)
        const data=response.data.data;
        const convertToArray= (data)=>{
            return Object.keys(data).map(key=>{
                return {
                    key,value:data[key]
                };
            });
            
        }
        const dataArray=convertToArray(data);
        const valueArray=convertToArray(dataArray)
        console.log(dataArray);
        return dataArray;

    } catch (error) {
        return (rejectWithValue(error))
    }
})

const billingSlice = createSlice({
    initialState: INITIAL_STATE,
    name: "billing",
    reducers: {
        setFromDate:(state,action)=>{
            state.fromDate=action.payload;
            
        },
        setToDate:(state,action)=>{
            state.toDate=action.payload;

        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsync.pending,(state)=>{
                state.loading=true;
                state.error=null;

            })
            .addCase(fetchDataAsync.fulfilled,(state,action)=>{
                state.loading=false;
                state.companies=[...action.payload];
                state.error=null;

            })
            .addCase(fetchDataAsync.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload;

            })
    }
})

export const {setFromDate,setToDate}= billingSlice.actions;

const billingReducer= billingSlice.reducer;
export const billingSelector= (state)=>state.billing;
export default billingReducer;



