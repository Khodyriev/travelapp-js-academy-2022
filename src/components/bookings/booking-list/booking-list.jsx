import Booking from '../booking/booking';
import './styles.css';

const BookingList = ({ books }) => (
    <ul className="bookings__list">
        {books.map((book) => (
          <Booking book={book} key={book.id} />
        ))}
    </ul>
  );
  
  export default BookingList;

