import React from 'react';
import Video from './Video';
import Suggestions from './suggestions';

const Main = () => {    
    return (
        <div className="w-full max-w-full overflow-hidden">
              <Suggestions />
              <Video />
        </div>
    );
};
export default Main;