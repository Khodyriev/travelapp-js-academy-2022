import { useParams, useLocation, } from 'react-router-dom';
import { useMemo } from '../hooks';

const useRouter = () => {
  const params = useParams();
  const location = useLocation();


  return useMemo(() => ({
      
      
      pathname: location.pathname,
      query: {
        ...params,
      },
      
      location,
      
    }), [params,  location]);
}

export { useRouter };