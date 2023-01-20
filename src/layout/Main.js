import React from 'react';
import { Outlet } from 'react-router-dom';
import AllData from '../components/AllData';
import Header from '../components/Header';
import Home from '../components/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Outlet></Outlet>
        </div>
    );
};

export default Main;