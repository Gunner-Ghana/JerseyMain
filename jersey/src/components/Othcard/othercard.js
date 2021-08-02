import React,{useCallback, useEffect} from 'react';

import './othercard.scss';
import { useDispatch,useSelector } from 'react-redux';

import Card from '../widgets/card/card';
import { getOtherKits,otherKitsSelector } from '../../features/Otherkits/otherkits';

const Othercard = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getOtherKits({}))
    },[])
    let first = {};
    let sec = {};
    let third = {};
    let fourth = {};
    const {otherKits} = useSelector(otherKitsSelector);
    {first = otherKits?{...otherKits[0]}: null};
    {sec = otherKits?{...otherKits[1]}: null};
    {third = otherKits?{...otherKits[2]}: null};
    {fourth = otherKits?{...otherKits[3]}: null};
    return (
        <div className="ncard">
            <Card info={first} color="#4F42E2"/>
            <Card info={sec} color="#4F42E2"/>
            <Card info={third} color="#4F42E2"/>
            <Card info={fourth} color="#4F42E2"/>
        </div>
    );
};

export default Othercard;