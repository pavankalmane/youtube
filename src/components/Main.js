import React from 'react';
import Video from './Video';
import { useSelector } from 'react-redux';

const Main = () => {
    const isOpen = useSelector((store) => store.sidebar.isOpen);
    
    return (
        <div className={`flex-1 ${isOpen ? 'ml-0' : 'ml-0'}`}>
            <Video />
        </div>
    )
};
export default Main;