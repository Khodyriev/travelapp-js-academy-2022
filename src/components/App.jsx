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
            <Route path={AppPath.ROOT} element={ <ProtectedRoute component={Travels} />} />          
            <Route path={AppPath.SIGNIN} element={<SignIn />} />
            <Route path={AppPath.SIGNUP} element={<SignUp />} />            
            <Route path={AppPath.TRAVELS_$ID} element={<ProtectedRoute component={TripDetails} />} />
            <Route path={AppPath.BOOKINGS} element={<ProtectedRoute component={Bookings} />} />
            <Route path={AppPath.TRAVELS} element={<ProtectedRoute component={Travels} />} />
            <Route path={AppPath.ANY} element={<ProtectedRoute component={Travels} />} />          
        </Routes>
        <Footer />
        </> 
  );
}

export default App;
