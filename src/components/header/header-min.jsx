import './styles.css';
import { AppPath } from '../../common/enums/enum';
import { Link } from 'react-router-dom';

const HeaderMin = () => (
    <header className="header">
      <div className="header__inner">
        <Link to={AppPath.ROOT} className="header__logo">Travel App</Link>        
      </div>
    </header>
);

export default HeaderMin;