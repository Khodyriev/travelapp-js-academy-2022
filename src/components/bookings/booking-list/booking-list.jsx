import Booking from '../booking/booking';
import './styles.css';

const BookingList = ({ books, onBookDelete }) => (
    <ul className="bookings__list">
        {books.map((book) => (
          <Booking book={book} onBookDelete={onBookDelete} key={book.id} />
        ))}
    </ul>
  );
  
  export default BookingList;

