import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppPath } from '../common/enums/enum';

const ProtectedRoute = ({ component: Component, ...rest }) => {
     const { userInfo } = useSelector((state) => state.user)
    if (!userInfo) { return <Navigate to={{ pathname: AppPath.SIGNIN, state: { from: rest.location }}} /> }     
    return <Component {...rest} />

  }
  
  export default ProtectedRoute