import { DEFAULT_FILTER_VALUE } from '../../../../common/constants/constants';
import { FilterKey, TravelDuration, TravelLevel } from '../../../../common/enums/enum';
import './styles.css'

const durationOptions = [DEFAULT_FILTER_VALUE].concat(Object.values(TravelDuration));
const levelOptions = [DEFAULT_FILTER_VALUE].concat(Object.values(TravelLevel));

const TripsFilter = () => (
    <form className="trips-filter__form" autocomplete="off">
          <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input name={FilterKey.SEARCH} type="search" placeholder="search by title" />
          </label>
          <label className="select">
            <span className="visually-hidden">Search by duration</span>
            <select name={FilterKey.DURATION}>
                <option value="">duration</option>
                {durationOptions.map((it) => (
                  <option value={it} key={it}>
                    {it}
                  </option>
                ))}
            </select>
          </label>
          <label className="select">
            <span className="visually-hidden">Search by level</span>
            <select nameName={FilterKey.LEVEL}>
                <option value="">level</option>
                {levelOptions.map((it) => (
                  <option value={it} key={it}>
                    {it}
                  </option>
                ))}
            </select>
          </label>
        </form>
);

export default TripsFilter;