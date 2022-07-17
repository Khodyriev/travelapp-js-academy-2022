import BookingList from './booking-list/booking-list';
import './style.css';

const Bookings = () => (
    <section class="bookings-page">
        <h1 class="visually-hidden">Travel App</h1>
        <BookingList />
    </section>
);

export default Bookings;