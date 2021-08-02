import React from 'react';
import Jbanner from '../jbanner/jbanner';

const puma = () => {
    return (
        <div>
           <Jbanner 
            type="Clubs."
            first="mancity.jpg" 
            sec="milan.jpg"
            infof="Man City-Home Kit 20/21"
            infos="Ac Milan-Home Kit 20/21" />
             <Jbanner 
            type="Internationals."
            first="gh.jpg" 
            sec="swiss.jpg"
            infof="Ghana-Home Kit 20/21"
            infos="Switzerland-Home Kit 20/21" />
            <Jbanner 
            type="Other Sports."
            first="pumagolf.jpg" 
            sec="pumahoodie.jpg"
            infof="Puma Golf"
            infos="Puma Hoodie" />
        </div>
    );
};

export default puma;