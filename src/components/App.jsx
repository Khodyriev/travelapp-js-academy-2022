import { Routes, Route } from "react-router-dom";
import { AppPath } from '../common/enums/enum';
import Footer from './footer/footer';
import Travels from './travels/travels';
import Bookings from './bookings/bookings';
import SignUp from './sign-up-in/sign-up';
import SignIn from './sign-up-in/sign-in';
import TripDetails from './trip-details/trip-details';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../features/user/userAction';
import ProtectedRoute from '../routing/ProtectedRoute';

const App = () => {

  const { userToken } = useSelector((state) => state.user)   
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
            <Route path={AppPath.ROOT} element={<Travels />} />
          </Route>
            <Route path={AppPath.SIGNIN} element={<SignIn />} />
            <Route path={AppPath.SIGNUP} element={<SignUp />} />
            <Route element={<ProtectedRoute />}>
            <Route path={AppPath.TRAVELS_$ID} element={<TripDetails />} />
            <Route path={AppPath.BOOKINGS} element={<Bookings />} />
            <Route path={AppPath.TRAVELS} element={<Travels />} />
            <Route path={AppPath.ANY} element={<Travels />} />
          </Route>          
        </Routes>
        <Footer />
        </> 
  );
}

export default App;
