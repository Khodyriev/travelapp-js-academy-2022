import './styles.css';
import { AppPath } from '../../common/enums/enum';
import HeaderMin from '../header/header-min';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../common/error/Error';
import { registerUser } from '../../features/user/userAction';
import { useEffect } from 'react';
import Loader from '../common/loader/loader';

const SignUp = () => { 

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  )
  const dispatch = useDispatch()

  const navigate = useNavigate()
  //   const handleSubmit = (evt) => {
  //       evt.preventDefault();
  //       navigate(AppPath.ROOT);
  //     }

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate(AppPath.ROOT)
    // redirect authenticated user to profile screen
    if (userInfo) navigate(AppPath.ROOT)
  }, [navigate, userInfo, success])

  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    // transform email string to lowercase to avoid case sensitivity issues during login
    data.email = data.email.toLowerCase()
    dispatch(registerUser(data))
  }

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
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form onSubmit={handleSubmit(submitForm)} className="sign-up-form" autoComplete="off">
        {/* render error message with Error component, if any */}
        {error && <Error>{error}</Error>}
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label className="trip-popup__input input" htmlFor='fullName'>
          <span className="input__heading">Full name</span>
          <input name="full-name" type="text" {...register('fullName')} required />
        </label>
        <label className="trip-popup__input input" htmlFor='email'>
          <span className="input__heading">Email</span>
          <input name="email" type="email" {...register('email')} required />
        </label>
        <label className="trip-popup__input input" htmlFor='password'>
          <span className="input__heading">Password</span>
          <input name="password" type="password" autoComplete="new-password" {...register('password')} required minLength={3} maxLength={20} />
        </label>
        <button className="button" type="submit" disabled={loading}>Sign Up</button>
      </form>
      <span>
        Already have an account?
        <Link to={AppPath.SIGNIN} className="sign-up-form__link">Sign In</Link>
      </span>
    </main>
  </>  
)};

export default SignUp;