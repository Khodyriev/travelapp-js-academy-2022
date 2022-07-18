import { getLastPath } from '../helpers/helpers';
import { AppPath } from '../common/enums/enum';
import { Link, Route, Switch } from 'react-router-dom';
import Footer from './footer/footer';
import Travels from './travels/travels';
import Bookings from './bookings/bookings';
import SignUp from './sign-up-in/sign-up';
import SignIn from './sign-up-in/sign-in';
import TripDetails from './trip-details/trip-details';
import trips from '../database/trips.json';
import bookings from '../database/bookings.json';

const App = () => {

  const { travels } = trips;
  const { books } = bookings;

  return (
    <> 

        <Switch>
            <Route path={AppPath.ROOT} exact>
              <Travels travels={travels} />
            </Route>
            <Route path={AppPath.SIGNIN} >
              <SignIn />
            </Route>
            <Route path={AppPath.SIGNUP} >
              <SignUp />
            </Route>
            <Route path={AppPath.TRAVELS_$ID} >
              <TripDetails travels={travels} />
            </Route>
            <Route path={AppPath.BOOKINGS}>
              <Bookings books={books} />
            </Route>
            <Route path={AppPath.TRAVELS || AppPath.ANY}>
              <Travels travels={travels} />
            </Route>
            
        </Switch>
        
      <Footer />
    </>
  );
}

export default App;
