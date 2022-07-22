import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userClise';
import tripsReducer from '../features/content/contentClise';

const store = configureStore({
  reducer: {
    user: userReducer,
    trips: tripsReducer
  }
})
export default store