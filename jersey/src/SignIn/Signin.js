import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { useHistory } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { login,userSelector,clearState } from '../features/User/user';

import './signin.scss';



const Signin = () => {
    const {error,handleSubmit,register}= useForm();
    const dispatch = useDispatch();
    const history = useHistory()
    const {isAuth} = useSelector(userSelector);
    useEffect(()=>{
        clearState()
    },[])
    useEffect(()=>{
        if(isAuth){
            history.push('/home')
        }
    },[isAuth])
    const onSubmit = (data)=>{
        dispatch(login(data))
        console.log("dispatched")
    }
    return (
        <div className="login-main">
            <h3 className="login-main-banner">Jerseys</h3>
            <h3 className="login-main-header">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="login-main-form">
                    <label  className="login-main-form-label">Username</label>
                    <input
                    type="text"
                    {...register('username')} />
                </div>
                <div className="login-main-form">
                    <label className="login-main-form-label">Password</label>
                    <input
                    type="password"
                    {...register('password')} />
                </div>
                <button>LOGIN</button>
               
            </form>
            <div className="login-main-signup" >
                <p>Don't have an account? <Link to="/sign-up">Register</Link></p>
            </div>
        </div>
    );
};

export default Signin;