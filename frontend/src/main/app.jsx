import '../common/template/dependencies'
import React from "react";
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer';
import Header from '../common/template/header'
import Messages from '../common/msg/messages';

import Routes from './routes';

export default props=>(
    <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className='content-wrapper'>
            <Routes></Routes>
        </div>
        <Footer></Footer>
        <Messages></Messages>
        
    </div>
)