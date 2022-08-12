import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { servUrl } from '../../common/enums/enum';

export const getBooks = createAsyncThunk(
    'books/fetch-bookings',
    async (arg, { getState, rejectWithValue }) => {
        try {
            const { user } = getState()
            const config = {
              headers: {
                Authorization: `Bearer ${user.userToken}`,                
              },
            }
            const { data } = await axios.get(servUrl.BOOKINGS.GETLIST, config)
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

export const putBook = createAsyncThunk(
  'books/post-book',
  async ({tripId, userId, guests, date}, { getState, rejectWithValue }) => {
      try {
          const { user } = getState()
          const config = {
            headers: {
              Authorization: `Bearer ${user.userToken}`,                
            },
          }
          const { data } = await axios.post(servUrl.BOOKINGS.BOOK,
            {tripId, userId, guests, date},
            config)
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

export const dellBook = createAsyncThunk(
    'books/dell-bookings',
    async (id, { getState, rejectWithValue }) => {
        try {
            const { user } = getState()
            const config = {
              headers: {
                Authorization: `Bearer ${user.userToken}`,                
              },
            }
            const { data } = await axios.delete(`${servUrl.BOOKINGS.DELL}${id}`, config)
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