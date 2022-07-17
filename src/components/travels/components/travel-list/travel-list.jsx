import Travel from '../travel/travel'
import './styles.css';

const Travellist = ({ count }) => (
    <ul className="trip-list">
      {Array.from(new Array(count), (_, idx) => (
        <Travel key={idx} />
      ))}
    </ul>
  );
  
  export default Travellist;