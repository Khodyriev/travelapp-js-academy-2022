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
  console.log("Loggin from app.js. useSelector((state) => state.user):", useSelector((state) => state.user))
  const dispatch = useDispatch()
  // const userToken = localStorage.getItem("token")
  // automatically authenticate user if token is found
  console.log('Loggin from app.js. userToken:', userToken)
  console.log('Loggin from app.js. userInfo:', userInfo)
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

        // <>
        // <Routes>          
        //   <Route path={AppPath.ROOT} element={<ProtectedRoute component={Travels} />} />          
        //   <Route path={AppPath.SIGNIN} element={<SignIn />} />
        //   <Route path={AppPath.SIGNUP} element={<SignUp />} />            
        //   <Route path={AppPath.TRAVELS_$ID} element={<ProtectedRoute component={TripDetails} />} />
        //   <Route path={AppPath.BOOKINGS} element={<ProtectedRoute component={Bookings} />} />
        //   <Route path={AppPath.TRAVELS} element={<ProtectedRoute component={Travels} />} />
        //   <Route path={AppPath.ANY} element={<ProtectedRoute component={Travels} />} />          
        // </Routes>
        // <Footer />
        // </> 
  );
}

export default App;
