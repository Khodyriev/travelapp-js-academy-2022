import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { servUrl } from '../../common/enums/enum';

export const getTrips = createAsyncThunk(
    'trips/fetch-trips',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { user } = getState()
            const config = {
              headers: {
                Authorization: `Bearer ${user.userToken}`,                
              },
            }
            const { data } = await axios.get(servUrl.TRIPS.GETALL, config)
            return data
            
          } catch (error) {
            if (error.response && error.response.data.message) {
              return rejectWithValue( `${error.response.data.statusCode}! ${error.response.data.error}. ${error.response.data.message}.`)
            } else {
              return rejectWithValue(error.message)
            }
          }
        }
      );

export const getTrip = createAsyncThunk(
  'trips/fetch-trip',
  async (id, { getState, rejectWithValue }) => {
      try {
          const { user } = getState()
          const config = {
            headers: {
              Authorization: `Bearer ${user.userToken}`,                
            },
          }
         const { data } = await axios.get(`${servUrl.TRIPS.GETONE}${id}`, config)
          return data
          
        } catch (error) {
          if (error.response && error.response.data.message) {
            return rejectWithValue( `${error.response.data.statusCode}! ${error.response.data.error}. ${error.response.data.message}.`)
          } else {
            return rejectWithValue(error.message)
          }
        }
      }
    )