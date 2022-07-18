import './styles.css';
import { AppPath } from '../../common/enums/enum';
import HeaderMin from '../header/header-min';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SignIn = () => {

    const navigate = useNavigate()
    const handleSubmit = (evt) => {
        evt.preventDefault();
        navigate(AppPath.ROOT);
      }

return (
    <>
    <HeaderMin />
    <main className="sign-in-page">
    <h1 className="visually-hidden">Travel App</h1>
    <form onSubmit={handleSubmit} className="sign-in-form" autoComplete="off">
    <h2 className="sign-in-form__title">Sign In</h2>
    <label className="trip-popup__input input">
        <span className="input__heading">Email</span>
        <input name="email" type="email" required />
    </label>
    <label className="trip-popup__input input">
        <span className="input__heading">Password</span>
        <input name="password" type="password" autoComplete="new-password" required minLength={3} maxLength={20} />
    </label>
    <button className="button" type="submit">Sign In</button>
    </form>
    <span>
    Don't have an account yet?
    <Link to={AppPath.SIGNUP} className="sign-in-form__link">Sign Up</Link>
    </span>
    </main>
    </>
)};

export default SignIn;