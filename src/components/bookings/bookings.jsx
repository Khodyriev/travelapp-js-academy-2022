// import { useCallback, useState } from '../../hooks/hooks';
import BookingList from './booking-list/booking-list';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../features/booking/bookingActions';
import HeaderMax from '../header/header-max';
import './styles.css';
import Placeholder from '../common/placeholder/placeholder';
import { DataPlaceholder } from '../../common/enums/enum';
// import { removeBook } from '../travels/helpers/helpers';
import Error from '../common/error/Error';
import Loader from '../common/loader/loader';


const Bookings = () => {

    const {loading, books, error} = useSelector((state) => state.books);
    const dispatch = useDispatch();

    // books.sort((a, b) => a.date > b.date ? 1 : -1);

    useEffect(() => {
        dispatch(getBooks());
        }, [dispatch]);

    // const [setBooks] = useState(books);

    const hasBook = Boolean(books.length);

    if (loading) {return (
        <>
          <main className="sign-in-page">
            < Loader />
          </main>
        </>
      )       
    }

    // const handleBookDelete = useCallback((book) => {
    //     setBooks(removeBook(books, book));
    //   }, [setBooks, books]);   

    return (
    <>
    <HeaderMax />
    <main className="bookings-page">
        <h1 className="visually-hidden">Travel App</h1>
        {error && <Error>{error}</Error>}
        {hasBook ? (<BookingList books={books} />) : (<Placeholder text={DataPlaceholder.NO_BOOKINGS} />)}
        
    </main>
    </>
    );
};

export default Bookings;