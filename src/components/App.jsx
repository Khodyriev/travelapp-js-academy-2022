import { getLastPath } from '../helpers/helpers';
import { AppPath } from '../common/enums/enum';
import Footer from './footer/footer';
import Travels from './travels/travels';
import Bookings from './bookings/bookings';
import SignUp from './sign-up-in/sign-up';
import SignIn from './sign-up-in/sign-in';
import TripDetails from './trip-details/trip-details';
import trips from '../database/trips.json';
// import bookings from '../database/bookings.json';

const App = () => {

  const { pathname } = window.location;

  const { travels } = trips;
  // const { books } = bookings;

  const getScreen = (path) => {
    const id = getLastPath(path);

    switch (path) {
      case `${AppPath.SIGNIN}` : {
        return <SignIn />
      }
      case `${AppPath.SIGNUP}` : {
        return <SignUp />
      }
      case `${AppPath.ROOT}`: {
        return <Travels travels={travels} />;
      }
      case `${AppPath.TRAVELS}`: {
        return <Travels travels={travels} />;
      }
      case `${AppPath.TRAVELS}/${id}`: {
        return <TripDetails travels={travels} id={id}/>;
      }
      case `${AppPath.BOOKINGS}` : {
        return <Bookings />
      }
      default: {
        return <Travels travels={travels} />;
      }
    }
  };

  return (
    <>    
    
      {getScreen(pathname)}
    
    <Footer />
    </>
  );
}

export default App;
