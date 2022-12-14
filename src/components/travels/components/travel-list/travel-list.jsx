import Travel from '../travel/travel'
import './styles.css';

const Travellist = ({ travels }) => (
    <ul className="trip-list">
      {travels.map((travel) => (
        <Travel travel={travel} key={travel.id} />
      ))}
    </ul>
  );
  
  export default Travellist;