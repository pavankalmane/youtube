import hamburgerIcon from '../utilities/assets/hamburgerIcon.png';
import youtubeLogo from "../utilities/assets/youtubeLogo.png";
import user from "../utilities/assets/user.png";
import { IoSearchOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../utilities/sidebarSlice';

const Logo = () => {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className='flex items-center justify-between w-full'>
       <div className='flex items-center'>
          <img 
            src={hamburgerIcon} 
            alt="Menu" 
            className='h-14 p-2 cursor-pointer hover:bg-gray-100 rounded-full' 
            onClick={handleToggleSidebar}
          />
          <img src={youtubeLogo} alt="YouTube Logo" className='h-16 ml-6' />
       </div>
       <div className='flex items-center'>
          <input type='text' placeholder='Search' className='border border-gray-400 p-2 w-96 rounded-l-full h-10' />
          <button className='border border-gray-400 h-10 border-l-0 rounded-r-full bg-gray-50 hover:bg-gray-100 px-3'><IoSearchOutline className='w-5 h-5' /></button>
       </div>
       <div className='flex items-center'>
            <img src={user} alt="user" className='h-10 w-10 rounded-full mr-3'/> 
        </div>      
    </div>
   
  )
}

export default Logo