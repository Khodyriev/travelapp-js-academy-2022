import TripBookPopup from './trip-booking-popup/trip-book-popup';
import './styles.css';
import { useRouter, useState } from '../../hooks/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTrip } from '../../features/content/contentActions';
import HeaderMax from '../header/header-max';
import Placeholder from '../common/placeholder/placeholder';
import { DataPlaceholder } from '../../common/enums/enum'
import Error from '../common/error/Error';
import Loader from '../common/loader/loader';

const TripDetails = () => {
    
    const { query } = useRouter();    
    const {loading, travel, error} = useSelector((state) => state.trips);
    const dispatch = useDispatch();    

    useEffect(() => {
    dispatch(getTrip(query.id));
    }, [dispatch, query.id]);

    const hasPage = Boolean(travel);
    
    const [currentTodo, setCurrentTodo] = useState(null);
    const handleAddPopupOpen = () => setCurrentTodo('1');
    const handleAddPopupClose = () => setCurrentTodo(null);
    const hasCurrentTodo = Boolean(currentTodo);    

    if (!hasPage) {return <Placeholder text={DataPlaceholder.NO_TRAVEL} />;}

    if (loading) {return (
      <>
        <main className="sign-in-page">
          < Loader />
        </main>
      </>
    )       
  }
  
    return (
      <>
        <HeaderMax />
        <main className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <div className="trip">
        {error && <Error>{error}</Error>}
            <img src={travel.image} className="trip__img" alt="trip place" />
            <div className="trip__content">
            <div className="trip-info">
                <h3 className="trip-info__title">{travel.title}</h3>
                <div className="trip-info__content">
                <span className="trip-info__duration"><strong>{travel.duration}</strong> days</span>
                <span className="trip-info__level">{travel.level}</span>
                </div>
            </div>
            <div className="trip__description">{travel.description}</div>
            <div className="trip-price">
                <span>Price</span>
                <strong className="trip-price__value">{travel.price} $</strong>
            </div>
            <button className="trip__button button" onClick={handleAddPopupOpen}>Book a trip</button>
            </div>
        </div>
        </main>
        {hasCurrentTodo && <TripBookPopup travel={travel} onClose={handleAddPopupClose} />}
      </>
    );
  };
  
  export default TripDetails;