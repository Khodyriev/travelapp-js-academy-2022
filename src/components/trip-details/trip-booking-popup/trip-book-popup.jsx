import Modal from '../../common/modal/modal';
import { useFocusTrap, useState } from '../../../hooks/hooks';
import { getTravelById } from '../../../helpers/helpers';
import './styles.css';

const TripBookPopup = ({ travels, id, onClose }) => {

  const ref = useFocusTrap();
  const travel = getTravelById(travels, id);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onClose();
  }

  const today = new Date();

  const [totalPrice, setTotal] = useState(travel.price);

  const handleChange = ({ target }) => {
    const { value } = target;
    setTotal(travel.price * value)}; 

  return (
    <Modal onClose={onClose}>
        <div className="modal">
        <div className="trip-popup">
          <button className="trip-popup__close" onClick={onClose}>×</button>
          <form ref={ref} onSubmit={handleSubmit} className="trip-popup__form" autoComplete="off">
            <div className="trip-info">
              <h3 className="trip-info__title">{travel.title}</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration"><strong>{travel.duration}</strong> days</span>
                <span className="trip-info__level">{travel.level}</span>
              </div>
            </div>
            <label className="trip-popup__input input">
              <span className="input__heading">Date</span>
              <input name="date" type="date" required min={today.toISOString().substr(0, 10)}/>
            </label>
            <label className="trip-popup__input input">
              <span className="input__heading">Number of guests</span>
              <input name="guests" type="number" min="1" max="10" defaultValue="1" required onChange={handleChange} />
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
