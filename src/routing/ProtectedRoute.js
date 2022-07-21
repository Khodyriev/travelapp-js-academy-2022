import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
// import { useNavigate, Link } from "react-router-dom";
import { AppPath } from '../common/enums/enum';
import Loader from '../components/common/loader/loader';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { userInfo } = useSelector((state) => state.user)
    // const navigate = useNavigate();


    // const userInfo = Boolean(user);

  return (userInfo)
    ? <Component {...rest} />
    : <Navigate to={{ pathname: AppPath.SIGNIN}} />;
};
  
    // // show unauthorized screen if no user is found in redux store
    // if (!userInfo) { 
    //   // navigate(AppPath.SIGNIN)
    //   // return ( 
    //   //   <>
    //   //   <main className="sign-in-page">
    //   //     < Loader />
    //   //   </main>
    //   // </>
    //   // )
    //   return (
    //     <div className='unauthorized'>
    //       <h1>Unauthorized :</h1>
    //       <span>
    //         <Link to={AppPath.SIGNIN}>Login</Link> to gain access
    //       </span>
    //     </div>
    //   )
    // }
  
    // // returns child route elements
    // return <Outlet />


  // }
  export default ProtectedRoute