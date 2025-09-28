import hamburgerIcon from '../utilities/assets/hamburgerIcon.png';
import youtubeLogo from "../utilities/assets/youtubeLogo.png";
import user from "../utilities/assets/user.png";
import { IoSearchOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../utilities/sidebarSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utilities/constant';
import { AiOutlineSearch } from 'react-icons/ai';
import { setSearchResults } from '../utilities/searchSlice';
const Logo = () => {
  const dispatch = useDispatch();

  const searchHistory = useSelector((store) => store.search);
  const [searchQuery,setSearchQuery] = useState('');
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);

  const searchSuggestions = async()=>{
      const data = await fetch(YOUTUBE_SEARCH_API+`&q=${searchQuery}`);
      const results = await data.json();

      dispatch(setSearchResults({searchQuery:results[1]}));
      setSuggestions(results[1]);

    }
  

  useEffect(() => {

    const debounceTimer = setTimeout(() => {
      if(searchHistory[searchQuery]){
        setSuggestions(searchHistory[searchQuery]);
      }else{
        searchSuggestions();
      }
      
    }, 200);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

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
       <div className='flex items-center relative'>
          <input type='text' placeholder='Search' className='border border-gray-400 p-2 w-96 rounded-l-full h-10' 
          value={searchQuery} 
          onChange={e => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
          />
          <button className='border border-gray-400 h-10 border-l-0 rounded-r-full bg-gray-50 hover:bg-gray-100 px-3'><IoSearchOutline className='w-5 h-5' /></button>  
          {showSuggestions && suggestions && suggestions.length > 0 && (
            <div className='absolute top-10 left-0 w-96 bg-white border border-gray-300 rounded-lg shadow-lg z-50'>
              {suggestions.map((suggestion) => (
                <div key={suggestion} className='p-2 hover:bg-gray-100 cursor-pointer'>
                  <AiOutlineSearch className='inline-block mr-2' />
                  {suggestion}
                </div>
              ))}
            </div>
          )}
       </div>
      
       <div className='flex items-center'>
            <img src={user} alt="user" className='h-10 w-10 rounded-full mr-3'/> 
        </div>      
    </div>
   
  );
}

export default Logo