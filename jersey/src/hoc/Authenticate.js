
/* eslint-disable */
import React,{useEffect} from 'react';
import { useHistory } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import { userSelector,checkAuth } from '../features/User/user';
import { Redirect } from 'react-router';

const Authenticate = (Component,props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {wasAuth,isLoading} = useSelector(userSelector);
    
    useEffect(()=>{
        dispatch(checkAuth({}))
    },[])
    console.log(wasAuth)
    return class Apps extends React.Component { 
    

    

        render() { 
    
           
           if(!wasAuth) {
               return <Redirect to="/" />
           }
           return <Component {...this.props} /> 
        }
    } 

};

export default Authenticate;