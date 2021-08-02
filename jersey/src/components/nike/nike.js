import React from 'react';
import Jbanner from '../jbanner/jbanner';

const nike = () => {
    return (
        <div>
           <Jbanner 
            type="Clubs."
            first="chelsea.jpg" 
            sec="liverpool.jpg"
            infof="Chelsea-Home Kit 20/21"
            infos="Liverpool-Home Kit 20/21" />
             <Jbanner 
            type="Internationals."
            first="england.jpg" 
            sec="us.jpg"
            infof="England-Home Kit 20/21"
            infos="USA-Home Kit 20/21" />
            <Jbanner 
            type="Other Sports."
            first="clev.jpg" 
            sec="nikegolf.jpg"
            infof="Clevaland-Home Kit 20/21"
            infos="Nike Golf-Home Kit 20/21" />
        </div>
    );
};

export default nike;