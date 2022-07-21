import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { servUrl } from '../../common/enums/enum';

export const registerUser = createAsyncThunk(    
    'user/register',    
    async ({ fullName, email, password }, { rejectWithValue }) => {
    try {
    const config = {
    headers: {
    'Content-Type': 'application/json',
    },
    }    
    const { data } = await axios.post(
      servUrl.AUTH.SIGNUP,
    { fullName, email, password },
    config
    )
    localStorage.setItem('userToken', data.token)
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

    export const userLogin = createAsyncThunk(
      'user/login',
        async ({ email, password }, { rejectWithValue }) => {
          try {
            const config = {
              headers: {
                'Content-Type': 'application/json',
              },
            }
            const { data } = await axios.post(
              servUrl.AUTH.SIGNIN,
              { email, password },
              config
            )
            localStorage.setItem('userToken', data.token)
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

      export const getUserDetails = createAsyncThunk(
        'user/getUserDetails', 
        async (arg, { getState, rejectWithValue }) => {
          try {
            const { user } = getState()
            const config = {
              headers: {
                Authorization: `Bearer ${user.userToken}`,                
              },
            }
            const { data } = await axios.get(servUrl.AUTH.GETUSR, config)
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