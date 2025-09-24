import React from 'react'
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Body = () => {
    const isOpen = useSelector((store) => store.sidebar.isOpen);

    return (
        <div className='flex'>
            {isOpen && <Sidebar />}
            <div className="flex-1">
                <Outlet />
            </div>            
        </div>
    )   
}
export default Body;