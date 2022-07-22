import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userClise';
import tripsReducer from '../features/content/contentClise';
import booksReducer from '../features/booking/bookingClise'

const store = configureStore({
  reducer: {
    user: userReducer,
    trips: tripsReducer,
    books: booksReducer
  }
})
export default store