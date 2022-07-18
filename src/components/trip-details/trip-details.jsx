import TripBookPopup from './trip-booking-popup/trip-book-popup';
import './styles.css';
import { useRouter, useState } from '../../hooks/hooks';
import HeaderMax from '../header/header-max';
import { getTravelById } from '../../helpers/helpers';
import Placeholder from '../common/placeholder/placeholder';
import { DataPlaceholder } from '../../common/enums/enum'

const TripDetails = ({ travels }) => {
    // const isPopupOpen = false;
    const { query } = useRouter();
    const travel = getTravelById(travels, query.id);
    const hasPage = Boolean(travel);
    
    const [currentTodo, setCurrentTodo] = useState(null);
    const handleAddPopupOpen = () => setCurrentTodo('1');
    const handleAddPopupClose = () => setCurrentTodo(null);
    const hasCurrentTodo = Boolean(currentTodo);

    if (!hasPage) {return <Placeholder text={DataPlaceholder.NO_TRAVEL} />;}
  
    return (
      <>
        <HeaderMax />
        <main className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <div className="trip">
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
        {hasCurrentTodo && <TripBookPopup travels={travels} id={query.id} onClose={handleAddPopupClose} />}
      </>
    );
  };
  
  export default TripDetails;