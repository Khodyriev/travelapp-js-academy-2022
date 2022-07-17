import { DEFAULT_FILTER_VALUE_DUR, DEFAULT_FILTER_VALUE_LEV } from '../../../common/constants/constants';
import { FilterKey } from '../../../common/enums/enum';

const DEFAULT_FILTER_VALUES = {
    [FilterKey.SEARCH]: '',
    [FilterKey.DURATION]: DEFAULT_FILTER_VALUE_DUR,
    [FilterKey.LEVEL]: DEFAULT_FILTER_VALUE_LEV,
  };

  export { DEFAULT_FILTER_VALUES };