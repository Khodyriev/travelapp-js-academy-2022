import { createAsyncThunk } from '@reduxjs/toolkit';
import { servUrl } from '../../common/enums/enum';

export const registerUser = createAsyncThunk(
    // action type string
    'user/register',
    // callback function
    async ({ fullName, email, password }, { rejectWithValue }) => {
    try {
    // // configure header's Content-Type as JSON
    // const config = {
    // headers: {
    // 'Content-Type': 'application/json',
    // },
    // }
    // // make request to backend
    // await axios.post(
    // '/api/user/register',
    // { firstName, email, password },
    // config
    // )
    const response = await fetch(
        servUrl.AUTH.SIGNUP,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email,
            password,
          }),
        }
      )
      let data = await response.json()
      console.log("data", data)
      if (response.status === 200) {
        localStorage.setItem("token", data.token)
        return { ...data, username: fullName, email: email }
      } else {
        return rejectWithValue(data)
      }
    } catch (error) {
    // return custom error message from API if any
    if (error.response && error.response.data.message) {
    return rejectWithValue(error.response.data.message)
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
            // configure header's Content-Type as JSON
            // const config = {
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            // }
            // const { data } = await axios.post(
            //   '/api/user/login',
            //   { email, password },
            //   config
            // )
            // // store user's token in local storage
            // localStorage.setItem('userToken', data.userToken)
            // return data
            const response = await fetch(
                servUrl.AUTH.SIGNIN,
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email,
                    password,
                  }),
                }
              )
              let data = await response.json()
              console.log("response", data)
              if (response.status === 200) {
                localStorage.setItem("token", data.token)
                return data
              } else {
                return rejectWithValue(data)
              }
          } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
              return rejectWithValue(error.response.data.message)
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
            // get user data from store
            const { user } = getState()      
            // configure authorization header with user's token
            // const config = {
            //   headers: {
            //     Authorization: `Bearer ${user.userToken}`,
            //   },
            // }
            // const { data } = await axios.get(`/api/user/profile`, config)
            // return data
            const response = await fetch(
              servUrl.AUTH.GETUSR,
              {
                method: "GET",
                headers: {
                  Authentication: `Bearer ${user.userToken}`,
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },                
              }
            )
            let data = await response.json()
            console.log("response", data)
            if (response.status === 200) {              
              return data
            } else {
              return rejectWithValue(data)
            }
          } catch (error) {
            if (error.response && error.response.data.message) {
              return rejectWithValue(error.response.data.message)
            } else {
              return rejectWithValue(error.message)
            }
          }
        }
      )