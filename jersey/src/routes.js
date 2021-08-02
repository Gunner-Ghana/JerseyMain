import React from 'react';
import {Switch,Route} from 'react-router-dom';


import Home from './components/Home/home';
import Nike from './components/nike/nike';
import Layout from './hoc/layout';
import Adidas from './components/adidas/adidas';
import Puma from './components/puma/puma';
import Signin from './SignIn/Signin';
import Signup from './components/Signup/Signup';

import Authenticate from './hoc/Authenticate';
const routes = () => {
    return (
       
         <Switch>
             <Route path="/" exact component={Signin} />
             <Route path="/sign-up" exact component={Signup} />
             <Layout>
             <Route path="/home" exact component={Authenticate(Home)} />
             <Route path="/nike" exact component={Authenticate(Nike)} />
             <Route path="/adidas" exact component={Authenticate(Adidas)} />
             <Route path="/puma" exact component={Authenticate(Puma)} />
             </Layout>
         </Switch>
       
    );
};

export default routes;