import './styles.css'
import briefcase from '../../assets/images/briefcase.svg'
import user from '../../assets/images/user.svg'
import { AppPath } from '../../common/enums/enum';

const HeaderMax = () => (
    <header className="header">
      <div className="header__inner">
        <a href={`${AppPath.ROOT}`} className="header__logo">Travel App</a>
        <nav className="header__nav">
          <ul className="nav-header__list">
            <li className="nav-header__item" title="Bookings">
              <a href={`${AppPath.BOOKINGS}`} className="nav-header__inner">
                <span className="visually-hidden">Bookings</span>
                <img src={briefcase} alt=" icon" />
              </a>
            </li>
            <li className="nav-header__item" title="Profile">
              <div className="nav-header__inner profile-nav" tabIndex="0">
                <span className="visually-hidden">Profile</span>
                <img src={user} alt="profile icon" />
                <ul className="profile-nav__list">
                  <li className="profile-nav__item profile-nav__username">John Doe</li>
                  <li className="profile-nav__item">
                    <button className="profile-nav__sign-out button">Sign Out</button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
);

export default HeaderMax;