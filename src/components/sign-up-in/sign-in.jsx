import './styles.css';
import { AppPath } from '../../common/enums/enum';
import HeaderMin from '../header/header-min';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../features/user/userAction';
import { useEffect } from 'react';
import Error from '../common/error/Error';
import Loader from '../common/loader/loader';

const SignIn = () => {

    const { loading, userInfo, error } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submitForm = (data) => {
        dispatch(userLogin(data))
    }
    
  useEffect(() => {
    if (userInfo) {
      navigate(AppPath.ROOT)
    }
  }, [navigate, userInfo])

    if (loading) {return (
      <>
        <main className="sign-in-page">
          < Loader />
        </main>
      </>
    )       
      }

return (
    <>
    <HeaderMin />
    <main className="sign-in-page">
    <h1 className="visually-hidden">Travel App</h1>
    <form onSubmit={handleSubmit(submitForm)} className="sign-in-form" autoComplete="off">
    {error && <Error>{error}</Error>}
    <h2 className="sign-in-form__title">Sign In</h2>
    <label className="trip-popup__input input" htmlFor='email'>
        <span className="input__heading">Email</span>
        <input name="email" type="email" {...register('email')} required />
    </label>
    <label className="trip-popup__input input" htmlFor='password'>
        <span className="input__heading">Password</span>
        <input name="password" type="password" autoComplete="new-password" {...register('password')} required minLength={3} maxLength={20} />
    </label>
    <button className="button" type="submit" disabled={loading}>Sign In</button>
    </form>
    <span>
    Don't have an account yet?
    <Link to={AppPath.SIGNUP} className="sign-in-form__link">Sign Up</Link>
    </span>
    </main>
    </>
)};

export default SignIn;