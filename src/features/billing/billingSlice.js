import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import transformData from "../../utiles/tranformData";
import axios from "axios";

const INITIAL_STATE = {
    fromDate: '',
    toDate: '',
    companies: [],
    filteredCompanies: [],
    selectedCompany: 'all',
    loading: false,
    error: null
}


export const fetchDataAsync = createAsyncThunk('billing/fetch', async (_, { getState, rejectWithValue }) => {
    try {
        const state = getState().billing;
        const fromDate = state.fromDate;
        const toDate = state.toDate;

        // const response = await axios.get(`${process.env.REACT_APP_URL}from_date=${fromDate}&to_date=${toDate}`)
        const response = await axios.get(`${process.env.REACT_APP_URL}from_date=2024-04-01&to_date=2024-06-30`)
        const data = response.data;
        
        const transformedData = transformData(data.success ? data.data : {});
                
        return transformedData;

    } catch (error) {
        return (rejectWithValue(error))
    }
})

const billingSlice = createSlice({
    initialState: INITIAL_STATE,
    name: "billing",
    reducers: {
        setFromDate: (state, action) => {
            state.fromDate = action.payload;

        },
        setToDate: (state, action) => {
            state.toDate = action.payload;

        },
        setSelectedCompany: (state, action) => {
            state.selectedCompany = action.payload;
            if (action.payload === 'all') {
                state.filteredCompanies = state.companies;
            } else {
                state.filteredCompanies = state.companies.filter(
                    company => company.serviceProvider === action.payload
                );
            }
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsync.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(fetchDataAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.companies = action.payload; 
                state.filteredCompanies = action.payload;
                state.error = null;

            })
            .addCase(fetchDataAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;

            })
    }
})

export const { setFromDate, setToDate, setSelectedCompany } = billingSlice.actions;

const billingReducer = billingSlice.reducer;
export const billingSelector = (state) => state.billing;
export default billingReducer;



