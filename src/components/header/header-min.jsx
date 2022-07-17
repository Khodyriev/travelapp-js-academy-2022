import './styles.css';
import { AppPath } from '../../common/enums/enum';

const HeaderMin = () => (
    <header className="header">
      <div className="header__inner">
        <a href={`${AppPath.ROOT}`} className="header__logo">Travel App</a>        
      </div>
    </header>
);

export default HeaderMin;