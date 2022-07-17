import { DEFAULT_FILTER_VALUE_DUR, DEFAULT_FILTER_VALUE_LEV } from '../../../../common/constants/constants';

const getFilteredTravels = (travels, filterValues) => {
  const { search, duration, level } = filterValues;

  return travels.filter((it) => {
    const isNameMatch = it.title.toLowerCase().includes(search.toLowerCase());
    const isStatusMath = it.duration === duration || duration === DEFAULT_FILTER_VALUE_DUR;
    const isPriorityMath = it.level === level || level === DEFAULT_FILTER_VALUE_LEV;

    return isNameMatch && isStatusMath && isPriorityMath;
  });
};

export { getFilteredTravels };