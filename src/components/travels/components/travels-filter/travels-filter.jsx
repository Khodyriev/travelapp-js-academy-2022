import { DEFAULT_FILTER_VALUE_DUR, DEFAULT_FILTER_VALUE_LEV } from '../../../../common/constants/constants';
import { FilterKey, TravelDuration, TravelLevel } from '../../../../common/enums/enum';
import './styles.css'

const durationOptions = [DEFAULT_FILTER_VALUE_DUR].concat(Object.values(TravelDuration));
const levelOptions = [DEFAULT_FILTER_VALUE_LEV].concat(Object.values(TravelLevel));

const TripsFilter = ({ values, onChange }) => {

  const handleChange = ({ target }) => {
    const { name, value } = target;

    onChange({
      ...values,
      [name]: value,
    });
  };

  return (
    <form className="trips-filter__form" autoComplete="off">
          <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input value={values.search} name={FilterKey.SEARCH} onChange={handleChange} type="search" placeholder="search by title" />
          </label>
          <label className="select">
            <span className="visually-hidden">Search by duration</span>
            <select value={values.duration} name={FilterKey.DURATION} onChange={handleChange}>                
                {durationOptions.map((it) => (
                  <option value={it} key={it}>
                    {it}
                  </option>
                ))}
            </select>
          </label>
          <label className="select">
            <span className="visually-hidden">Search by level</span>
            <select value={values.level} name={FilterKey.LEVEL} onChange={handleChange}>                
                {levelOptions.map((it) => (
                  <option value={it} key={it}>
                    {it}
                  </option>
                ))}
            </select>
          </label>
        </form>
    );
};

export default TripsFilter;