import { createSlice } from '@reduxjs/toolkit';
import { getTrips, getTrip } from './contentActions';

const initialState = {
    loading: false,
    travels: [],
    travel: {},
    error: null,    
  }

  const tripsSlice = createSlice({
    name: 'trips',
    initialState,
    reducers: {
   
    },
    extraReducers: {
      [getTrips.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [getTrips.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.travels = payload        
      },
      [getTrips.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
      [getTrip.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [getTrip.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.travel = payload 
      },
      [getTrip.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },

    },
  })  
 
  
  export default tripsSlice.reducer