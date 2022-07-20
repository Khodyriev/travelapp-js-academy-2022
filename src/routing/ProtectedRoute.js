import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AppPath } from '../common/enums/enum';
import { Link } from 'react-router-dom';

const ProtectedRoute = () => {
    const { userInfo } = useSelector((state) => state.user)
    const navigate = useNavigate()
  
    // show unauthorized screen if no user is found in redux store
    if (!userInfo) { 
      // navigate(AppPath.SIGNIN)
      return (
        <div className='unauthorized'>
          <h1>Unauthorized :</h1>
          <span>
            <Link to={AppPath.SIGNIN}>Sign in</Link> to gain access
          </span>
        </div>
      )
    }
  
    // returns child route elements
    return <Outlet />
  }
  export default ProtectedRoute