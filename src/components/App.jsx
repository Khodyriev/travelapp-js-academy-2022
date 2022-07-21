import { Routes, Route } from "react-router-dom";
import { AppPath } from '../common/enums/enum';
import Footer from './footer/footer';
import Travels from './travels/travels';
import Bookings from './bookings/bookings';
import SignUp from './sign-up-in/sign-up';
import SignIn from './sign-up-in/sign-in';
import TripDetails from './trip-details/trip-details';
import trips from '../database/trips.json';
import bookings from '../database/bookings.json';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../features/user/userAction';
import ProtectedRoute from '../routing/ProtectedRoute';

const App = () => {

  const { travels } = trips;
  const { books } = bookings;

  books.sort((a, b) => a.date > b.date ? 1 : -1);

  const { userInfo, userToken } = useSelector((state) => state.user)   
  const dispatch = useDispatch()    
  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails())
    }
  }, [userToken, dispatch])

  return (    
        <>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path={AppPath.ROOT} element={<Travels travels={travels} />} />
          </Route>
            <Route path={AppPath.SIGNIN} element={<SignIn />} />
            <Route path={AppPath.SIGNUP} element={<SignUp />} />
            <Route element={<ProtectedRoute />}>
            <Route path={AppPath.TRAVELS_$ID} element={<TripDetails travels={travels} />} />
            <Route path={AppPath.BOOKINGS} element={<Bookings books={books} />} />
            <Route path={AppPath.TRAVELS} element={<Travels travels={travels} />} />
            <Route path={AppPath.ANY} element={<Travels travels={travels} />} />
          </Route>          
        </Routes>
        <Footer />
        </> 
  );
}

export default App;
