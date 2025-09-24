import React from 'react'
import Main from './Main';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

const Body = () => {
    const isOpen = useSelector((store) => store.sidebar.isOpen);

    return (
        <div className='flex'>
            {isOpen && <Sidebar />}
            <Main />             
        </div>
    )
}
export default Body;