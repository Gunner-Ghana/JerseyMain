import React from 'react';
import Jbanner from '../jbanner/jbanner';

const adidas = () => {
    return (
        <div>
           <Jbanner 
            type="Clubs."
            first="arsenal.jpg" 
            sec="galaxy.jpg"
            infof="Arsenal-Home Kit 20/21"
            infos="LA Galaxy-Home Kit 20/21" />
             <Jbanner 
            type="Internationals."
            first="arg.jpg" 
            sec="japan.jpg"
            infof="Argentina-Home Kit 20/21"
            infos="Japan-Home Kit 20/21" />
            <Jbanner 
            type="Other Sports."
            first="adigolf.jpg" 
            sec="athlete.jpg"
            infof="Adidas Golf-Home Kit 20/21"
            infos="Adidas Hoodie 20/21" />
        </div>
    );
};

export default adidas;