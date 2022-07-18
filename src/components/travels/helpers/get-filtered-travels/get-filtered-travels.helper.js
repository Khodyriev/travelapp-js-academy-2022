import { DEFAULT_FILTER_VALUE_DUR, DEFAULT_FILTER_VALUE_LEV } from '../../../../common/constants/constants';

const getFilteredTravels = (travels, filterValues) => {
  const { search, duration, level } = filterValues;

  return travels.filter((it) => {
    const isNameMatch = it.title.toLowerCase().includes(search.toLowerCase());
    let namedDuration = '';
    if (it.duration < 5) {namedDuration = '< 5 days'} else if (it.duration >= 10) {namedDuration = '≥ 10 days'} else {namedDuration = '< 10 days'};
    const isDurationMath = namedDuration === duration || duration === DEFAULT_FILTER_VALUE_DUR;
    const isLevelMath = it.level === level || level === DEFAULT_FILTER_VALUE_LEV;

    return isNameMatch && isDurationMath && isLevelMath;
  });
};

export { getFilteredTravels };