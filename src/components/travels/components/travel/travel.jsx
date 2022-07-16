import './styles.css';
import iceland from '../../../../assets/images/iceland.jpg';
import { AppPath } from '../../../../common/enums/enum';

const Travel = () => (
    <li class="trip-card">
            <img src={iceland} alt="place of the trip" />
            <div className="trip-card__content">
              <div className="trip-info">
                <h3 className="trip-info__title">Iceland</h3>
                <div className="trip-info__content">
                  <span className="trip-info__duration"><strong>15</strong> days</span>
                  <span className="trip-info__level">easy</span>
                </div>
              </div>
              <div className="trip-price">
                <span>Price</span>
                <strong className="trip-price__value">7000 $</strong>
              </div>
            </div>
            <a href={`${AppPath.TRAVELS}/1`} className="button">Discover a trip</a>
          </li>
);

export default Travel;