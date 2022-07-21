import './styles.css'
import briefcase from '../../assets/images/briefcase.svg'
import user from '../../assets/images/user.svg'
import { AppPath } from '../../common/enums/enum';
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getUserDetails } from '../../features/user/userAction';
import { logout } from '../../features/user/userClise';
import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';

const HeaderMax = () => {   
  
  // const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  console.log('Loggin from header-max.js. userInfo:', userInfo)

  let userNameShown;
  if (userInfo.fullName) { userNameShown = userInfo.fullName} else {userNameShown = userInfo.user.fullName}

  return  (
    <>
    <header className="header">
      <div className="header__inner">
        <Link to={AppPath.ROOT} className="header__logo">Travel App</Link>
        <nav className="header__nav">
          <ul className="nav-header__list">
            <li className="nav-header__item" title="Bookings">
              <Link to={AppPath.BOOKINGS} className="nav-header__inner">
                <span className="visually-hidden">Bookings</span>
                <img src={briefcase} alt=" icon" />
              </Link>
            </li>
            <li className="nav-header__item" title="Profile">
              <div className="nav-header__inner profile-nav" tabIndex="0">
                <span className="visually-hidden">Profile</span>
                <img src={user} alt="profile icon" />
                <ul className="profile-nav__list">
                  <li className="profile-nav__item profile-nav__username">{userNameShown}</li>
                  <li className="profile-nav__item">
                    <button className="profile-nav__sign-out button" onClick={() => {dispatch(logout())}}>Sign Out</button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
    );
};

export default HeaderMax;