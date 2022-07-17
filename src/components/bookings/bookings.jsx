import { useCallback, useState } from '../../hooks/hooks';
import BookingList from './booking-list/booking-list';
import HeaderMax from '../header/header-max';
import './styles.css';
import Placeholder from '../common/placeholder/placeholder';
import { DataPlaceholder } from '../../common/enums/enum';
import { removeBook } from '../travels/helpers/helpers';


const Bookings = ({ books: fetchedBooks }) => {

    const [books, setBooks] = useState(fetchedBooks);

    const hasBook = Boolean(books.length);

    

    const handleBookDelete = useCallback((book) => {
        setBooks(removeBook(books, book));
      }, [setBooks, books]);

    return (
    <>
    <HeaderMax />
    <main className="bookings-page">
        <h1 className="visually-hidden">Travel App</h1>
        {hasBook ? (<BookingList books={books} onBookDelete={handleBookDelete} />) : (<Placeholder text={DataPlaceholder.NO_BOOKINGS} />)}
        
    </main>
    </>
    );
};

export default Bookings;