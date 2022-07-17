import BookingList from './booking-list/booking-list';
import HeaderMax from '../header/header-max';
import './styles.css';
import Placeholder from '../common/placeholder/placeholder';
import { DataPlaceholder } from '../../common/enums/enum';

const Bookings = ({ books }) => {

    const hasBook = Boolean(books.length);

    return (
    <>
    <HeaderMax />
    <main className="bookings-page">
        <h1 className="visually-hidden">Travel App</h1>
        {hasBook ? (<BookingList books={books} />) : (<Placeholder text={DataPlaceholder.NO_BOOKINGS} />)}
        
    </main>
    </>
    );
};

export default Bookings;