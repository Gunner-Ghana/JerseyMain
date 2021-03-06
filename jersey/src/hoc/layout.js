import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';

const layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default layout;