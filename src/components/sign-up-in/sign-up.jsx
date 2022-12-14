import './styles.css';
import { AppPath } from '../../common/enums/enum';
import HeaderMin from '../header/header-min';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SignUp = () => { 

  const navigate = useNavigate()
    const handleSubmit = (evt) => {
        evt.preventDefault();
        navigate(AppPath.ROOT);
      }
  
  return (
  <>
    <HeaderMin />
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form onSubmit={handleSubmit} className="sign-up-form" autoComplete="off">
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Full name</span>
          <input name="full-name" type="text" required />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input name="email" type="email" required />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input name="password" type="password" autoComplete="new-password" required minLength={3} maxLength={20} />
        </label>
        <button className="button" type="submit">Sign Up</button>
      </form>
      <span>
        Already have an account?
        <Link to={AppPath.SIGNIN} className="sign-up-form__link">Sign In</Link>
      </span>
    </main>
  </>  
)};

export default SignUp;