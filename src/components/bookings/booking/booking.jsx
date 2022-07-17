import './styles.css';

const Booking = () => (
        <li class="booking">
          <h3 className="booking__title">Iceland</h3>
          <span className="booking__guests">2 guests</span>
          <span className="booking__date">13.07.2022</span>
          <span className="booking__total">14000 $</span>
          <button className="booking__cancel" title="Cancel booking">
            <span className="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
);
    
    export default Booking;