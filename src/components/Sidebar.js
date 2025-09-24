import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdSubscriptions, MdVideoLibrary } from 'react-icons/md';

const Sidebar = () => {
    return (
        <div className='w-60 p-4'>
            <ul className='space-y-2'>
                <li>
                    <Link to="/" className='flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer'>
                        <AiFillHome className='w-6 h-6 text-gray-700' />
                        <span className='font-medium'>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/shorts" className='flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer'>
                        <SiYoutubeshorts className='w-6 h-6 text-gray-700' />
                        <span className='font-medium'>Shorts</span>
                    </Link>
                </li>
                <li>
                    <Link to="/subscriptions" className='flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer'>
                        <MdSubscriptions className='w-6 h-6 text-gray-700' />
                        <span className='font-medium'>Subscriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/library" className='flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer'>
                        <MdVideoLibrary className='w-6 h-6 text-gray-700' />
                        <span className='font-medium'>Library</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;