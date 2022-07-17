import './style.css';
import { AppPath } from '../../common/enums/enum';

const SignIn = () => (
    <section className="sign-in-page">
    <h1 className="visually-hidden">Travel App</h1>
    <form className="sign-in-form" autocomplete="off">
    <h2 className="sign-in-form__title">Sign In</h2>
    <label className="trip-popup__input input">
        <span className="input__heading">Email</span>
        <input name="email" type="email" required />
    </label>
    <label className="trip-popup__input input">
        <span className="input__heading">Password</span>
        <input name="password" type="password" autocomplete="new-password" required />
    </label>
    <button className="button" type="submit">Sign In</button>
    </form>
    <span>
    Don't have an account yet?
    <a href={`${AppPath.SIGNUP}`} class="sign-in-form__link">Sign Up</a>
    </span>
    </section>
);

export default SignIn;