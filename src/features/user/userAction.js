import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { servUrl } from '../../common/enums/enum';

export const registerUser = createAsyncThunk(
    // action type string
    'user/register',
    // callback function
    async ({ fullName, email, password }, { rejectWithValue }) => {
    try {


      // -----> alternative varian to fetch AXIOS -->START<--
    // configure header's Content-Type as JSON
    const config = {
    headers: {
    'Content-Type': 'application/json',
    },
    }
    // make request to backend
    const { data } = await axios.post(
      servUrl.AUTH.SIGNUP,
    { fullName, email, password },
    config
    )
    localStorage.setItem('userToken', data.token)
            return data
      // -----> alternative varian to fetch AXIOS -->END<--  

    // -----> alternative varian to fetch -->START<--
    // const response = await fetch(
    //     servUrl.AUTH.SIGNUP,
    //     {
    //       method: "POST",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         fullName,
    //         email,
    //         password,
    //       }),
    //     }
    //   )
    //   let data = await response.json()
    //   console.log("data", data)
    //   if (response.status === 200) {
    //     localStorage.setItem("token", data.token)
    //     return { ...data, username: fullName, email: email }
    //   } 
    //   else {        
    //     return rejectWithValue(data)
    //   }
    // -----> alternative varian to fetch -->END<--  


    } catch (error) {
    // return custom error message from API if any
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

              // -----> alternative varian to fetch AXIOS -->START<--
            // configure header's Content-Type as JSON
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
            // store user's token in local storage
            localStorage.setItem('userToken', data.token)
            return data
              // -----> alternative varian to fetch AXIOS -->END<--

          // -----> alternative varian to fetch -->START<--  
            // const response = await fetch(
            //     servUrl.AUTH.SIGNIN,
            //     {
            //       method: "POST",
            //       headers: {
            //         Accept: "application/json",
            //         "Content-Type": "application/json",
            //       },
            //       body: JSON.stringify({
            //         email,
            //         password,
            //       }),
            //     }
            //   )
            //   let data = await response.json()
            //   console.log("response", data)
            //   if (response.status === 200) {
            //     localStorage.setItem("token", data.token)
            //     return data
            //   } 
            //   else {
            //     return rejectWithValue(data)
            //   }

            // } catch (error) {
            //   console.log("Error", error.response.data)
            //   rejectWithValue(error.response.data)
            // }
              // -----> alternative varian to fetch -->END<--



          } catch (error) {
            // return custom error message from API if any
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
            // get user data from store
            const { user } = getState() 
            
              // -----> alternative varian to fetch AXIOS -->START<--
            // configure authorization header with user's token
            const config = {
              headers: {
                Authorization: `Bearer ${user.userToken}`,
                // 'Content-Type': 'application/json',
              },
            }
            const { data } = await axios.get(servUrl.AUTH.GETUSR, config)
            return data
            // -----> alternative varian to fetch AXIOS -->END<--

            // -----> alternative varian to fetch -->START<--
            // const response = await fetch(
            //   servUrl.AUTH.GETUSR,
            //   {
            //     method: "GET",
            //     headers: {
            //       Authorization: `Bearer ${user.userToken}`,
            //       Accept: "application/json",
            //       "Content-Type": "application/json",
            //     },                
            //   }
            // )
            // let data = await response.json()
            // console.log("Loggin from userActions.js. response in user/getUserDetails", data)
            // console.log("Loggin from userActions.js. user.userToken", user.userToken)
            // if (response.status === 200) {              
            //   return data
            // } 
            // else {
            //   return rejectWithValue(data)
            // }
            // -----> alternative varian to fetch -->END<--


          } catch (error) {
            if (error.response && error.response.data.message) {
              return rejectWithValue( `${error.response.data.statusCode}! ${error.response.data.error}. ${error.response.data.message}.`)
            } else {
              return rejectWithValue(error.message)
            }
          }
        }
      )