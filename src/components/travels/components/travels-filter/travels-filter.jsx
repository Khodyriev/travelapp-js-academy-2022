import { DEFAULT_FILTER_VALUE_DUR, DEFAULT_FILTER_VALUE_LEV } from '../../../../common/constants/constants';
import { FilterKey, TravelDuration, TravelLevel } from '../../../../common/enums/enum';
import './styles.css'

const durationOptions = [DEFAULT_FILTER_VALUE_DUR].concat(Object.values(TravelDuration));
const levelOptions = [DEFAULT_FILTER_VALUE_LEV].concat(Object.values(TravelLevel));

const TripsFilter = () => (
    <form className="trips-filter__form" autoComplete="off">
          <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input name={FilterKey.SEARCH} type="search" placeholder="search by title" />
          </label>
          <label className="select">
            <span className="visually-hidden">Search by duration</span>
            <select name={FilterKey.DURATION}>                
                {durationOptions.map((it) => (
                  <option value={it} key={it}>
                    {it}
                  </option>
                ))}
            </select>
          </label>
          <label className="select">
            <span className="visually-hidden">Search by level</span>
            <select name={FilterKey.LEVEL}>                
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