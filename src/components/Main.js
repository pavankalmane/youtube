import React from 'react';
import Video from './Video';
import Suggestions from './suggestions';
import { useSelector } from 'react-redux';

const Main = () => {
    const isOpen = useSelector((store) => store.sidebar.isOpen);
    
    return (
        <div className="w-full max-w-full overflow-hidden">
              <Suggestions />
              <Video />
        </div>
    )
};
export default Main;