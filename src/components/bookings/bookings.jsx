import BookingList from './booking-list/booking-list';
import HeaderMax from '../header/header-max';
import './styles.css';

const Bookings = () => (
    <>
    <HeaderMax />
    <main className="bookings-page">
        <h1 className="visually-hidden">Travel App</h1>
        <BookingList />
    </main>
    </>
);

export default Bookings;