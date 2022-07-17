import './styles.css';

const Booking = ({ book }) => (
        <li className="booking">
          <h3 className="booking__title">{book.trip.title}</h3>
          <span className="booking__guests">{book.guests} guests</span>
          <span className="booking__date">{book.date}</span>
          <span className="booking__total">{book.totalPrice} $</span>
          <button className="booking__cancel" title="Cancel booking">
            <span className="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
);
    
    export default Booking;