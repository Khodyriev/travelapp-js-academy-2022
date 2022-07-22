import Modal from '../../common/modal/modal';
import { useState, useRouter } from '../../../hooks/hooks';
import { useDispatch, useSelector } from 'react-redux'; 
import { useForm } from 'react-hook-form';
import { putBook } from '../../../features/booking/bookingActions';
import './styles.css';
import Error from '../../common/error/Error';
import Loader from '../../common/loader/loader';

const TripBookPopup = ({ travel, onClose }) => {
  
  const { query } = useRouter();
  const {loading,  error} = useSelector((state) => state.trips);
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const today = new Date();  

  const [totalPrice, setTotal] = useState(travel.price);  

  const handleChange = ({ target }) => {
    const { value } = target;    
    setTotal(travel.price * value)}; 

    const { register, handleSubmit } = useForm()

    const submitForm = (data) => {
      const fullData = {
        tripId: query.id,
        userId: userInfo.id,
        guests: data.guests,
        date: data.date
      }
      dispatch(putBook(fullData))
      // console.log('log from booking. data from form', data)
      // console.log('log from booking. data for dispatcher', fullData)
      onClose();
  }  

  if (loading) {return (
      <>
        <main className="sign-in-page">
          < Loader />
        </main>
      </>
    )       
  }


  return (
    <Modal onClose={onClose}>
        <div className="modal">
        <div className="trip-popup">
          <button className="trip-popup__close" onClick={onClose}>×</button>
          {error && <Error>{error}</Error>}
          <form  onSubmit={handleSubmit(submitForm)} className="trip-popup__form" autoComplete="off">
            <div className="trip-info">
              <h3 className="trip-info__title">{travel.title}</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration"><strong>{travel.duration}</strong> days</span>
                <span className="trip-info__level">{travel.level}</span>
              </div>
            </div>
            <label className="trip-popup__input input">
              <span className="input__heading">Date</span>
              <input name="date" type="date" {...register('date')} required min={today.toISOString().substr(0, 10)}/>
            </label>
            <label className="trip-popup__input input">
              <span className="input__heading">Number of guests</span>
              <input name="guests" type="number" min="1" max="10" defaultValue="1" {...register('guests')} required onChange={handleChange} />
            </label>
            <span className="trip-popup__total">
              Total: <output className="trip-popup__total-value">{totalPrice} $</output>
            </span>
            <button className="button" type="submit">Book a trip</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default TripBookPopup;