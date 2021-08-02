import React,{useCallback,useState, useEffect} from 'react';

import './jcard.scss';
import { useDispatch,useSelector } from 'react-redux';

import Card from '../../widgets/card/card';


import { getClubKits,clubKitsSelector } from '../../../features/Clubkits/clubkits';
const Jcard = () => {
    const dispatch = useDispatch();
    const [mounted, setMounted] = useState(true);
    const {kits} = useSelector(clubKitsSelector);
    useEffect(()=>{
        dispatch(getClubKits({}))
    },[])
    let first = {};
    let sec = {};
    let third = {};
    let fourth = {};
    const handleClick = ()=>{
        console.log("fiiiireeee")
      
    }
    {first = kits?{...kits[0]}: null};
    {sec = kits?{...kits[1]}: null};
    {third = kits?{...kits[2]}: null};
    {fourth = kits?{...kits[3]}: null};
    return (
        <div className="jcard">
              <Card info={first} color="#4F42E2"/>
              <Card info={sec} color="#4F42E2"/>
              <Card info={third} color="#4F42E2"/>
              <Card info={fourth} color="#4F42E2"/>
        </div>
    );
};

export default Jcard;