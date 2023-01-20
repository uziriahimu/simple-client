import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-5xl mt-8 '>
            <Link className='mr-10' to='/'>Home</Link>
            <Link to='/alldata'>All Data</Link>
        </div>
    );
};

export default Header;