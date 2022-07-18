import './styles.css';

const Booking = ({ book, onBookDelete }) => {

  const handleBookDelete = () => {
    onBookDelete(book);
  };

  const dateFormated = () => {
    const date = new Date(book.date);
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    let yyyy = date.getFullYear();
    return dd + '.' + mm + '.' + yyyy;
  }

      return (
        <li className="booking">
          <h3 className="booking__title">{book.trip.title}</h3>
          <span className="booking__guests">{book.guests} guests</span>
          <span className="booking__date">{dateFormated()}</span>
          <span className="booking__total">{book.totalPrice} $</span>
          <button onClick={handleBookDelete} className="booking__cancel" title="Cancel booking">
            <span className="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
      )
};
    
    export default Booking;