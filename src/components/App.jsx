import { getLastPath } from '../helpers/helpers';
import { AppPath } from '../common/enums/enum';
import Footer from './footer/footer';
import Travels from './travels/travels';
import Bookings from './bookings/bookings';
import SignUp from './sign-up-in/sign-up';
import SignIn from './sign-up-in/sign-in';
import TripDetails from './trip-details/trip-details';

const App = () => {

  const { pathname } = window.location;

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
        return <Travels />;
      }
      case `${AppPath.TRAVELS}`: {
        return <Travels />;
      }
      case `${AppPath.TRAVELS}/${id}`: {
        return <TripDetails />;
      }
      case `${AppPath.BOOKINGS}` : {
        return <Bookings />
      }
      default: {
        return <SignIn />;
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
