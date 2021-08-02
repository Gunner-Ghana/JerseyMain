import React,{useCallback, useEffect} from 'react';

import './int.scss';
import { useDispatch,useSelector } from 'react-redux';

import Card from '../widgets/card/card';
import { getIntKits,intKitsSelector} from '../../features/Intkits/intkits';

const National = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getIntKits({}))
    },[])
    let first = {};
    let sec = {};
    let third = {};
    let fourth = {};
    const {ikits} = useSelector(intKitsSelector);
    //console.log(iKits)
    {first = ikits?{...ikits[0]}: null};
    {sec = ikits?{...ikits[1]}: null};
    {third = ikits?{...ikits[2]}: null};
    {fourth = ikits?{...ikits[3]}: null};
    return (
        <div className="ncard">
            <Card info={first} color="#4F42E2"/>
            <Card info={sec} color="#4F42E2"/>
            <Card info={third} color="#4F42E2"/>
            <Card info={fourth} color="#4F42E2"/>
        </div>
    );
};

export default National;