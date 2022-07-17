import BookingList from './booking-list/booking-list';
import './styles.css';

const Bookings = () => (
    <main class="bookings-page">
        <h1 class="visually-hidden">Travel App</h1>
        <BookingList />
    </main>
);

export default Bookings;