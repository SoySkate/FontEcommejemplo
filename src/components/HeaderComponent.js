import React from 'react';
import SearchComponent from './SearchComponent';
import ProfileComponent from './ProfileComponent';
import CartComponent from './CartComponent';

const HeaderComponent = () => {
    return (
        <header className="header sticky top-0 z-30">
            <nav className='bg-blue-600 hover:bg-blue-500 pt-4 pb-2 px-[2rem]'>
                <div>
                <ul className='flex items-center justify-between'>
                    <li><a href="/">Logo</a></li>
                    <li><SearchComponent/></li>
                    <li className='flex'><CartComponent/><div className='mx-4'></div><ProfileComponent/></li>
                </ul></div>
                {/* <div>
                <ul className='flex items-center justify-between px-[2rem] pt-2'>
                    <li><a href="/">miauuu</a></li>
                    <li><a href="/">miauuu</a></li>
                    <li className='flex'><a href="/">miauuu</a></li>
                </ul>
                </div> */}
            </nav>
        </header>
    );
};

export default HeaderComponent;
