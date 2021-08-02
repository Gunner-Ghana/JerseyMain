import React,{useEffect} from 'react';
import {useForm} from 'react-hook-form';
import { useHistory } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import { signup,userSelector,clearState } from '../../features/User/user';

import './signup.scss';

const Signup = () => {
    const {error,handleSubmit,register}= useForm();
    const dispatch = useDispatch();
    const history = useHistory()
    const {success,isAuth} = useSelector(userSelector);
    useEffect(()=>{
        clearState()
    },[])
    useEffect(()=>{
        if(isAuth){
            history.push('/home')
        }
    },[success])
    const onSubmit = (data)=>{
        dispatch(signup(data))
        console.log("dispatched")
    }
    return (
        <div className="signup-main">
            <h3 className="signup-main-banner">Jerseys</h3>
            <h3 className="signup-main-header">Sign Up.</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="signup-main-form">
                    <label  className="signup-main-form-label">Username</label>
                    <input
                    type="text"
                    {...register('username')} />
                </div>
                <div className="signup-main-form">
                    <label className="signup-main-form-label">Password</label>
                    <input
                    type="password"
                    {...register('password')} />
                </div>
                <button>REGISTER</button>
               
            </form>
        </div>
    );
};

export default Signup;