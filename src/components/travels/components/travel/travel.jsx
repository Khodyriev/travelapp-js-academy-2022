import './styles.css';
import { AppPath } from '../../../../common/enums/enum';

const Travel = ({ travel }) => (
    <li className="trip-card">
            <img src={travel.image} alt="place of the trip" className="trip-card__image" />
            <div className="trip-card__content">
              <div className="trip-info">
                <h3 className="trip-info__title">{travel.title}</h3>
                <div className="trip-info__content">
                  <span className="trip-info__duration"><strong>{travel.duration}</strong> days</span>
                  <span className="trip-info__level">{travel.level}</span>
                </div>
              </div>
              <div className="trip-price">
                <span>Price</span>
                <strong className="trip-price__value">{travel.price} $</strong>
              </div>
            </div>
            <a href={`${AppPath.TRAVELS}/${travel.id}`} className="button">Discover a trip</a>
          </li>
);

export default Travel;