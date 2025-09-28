import {useState} from 'react';
import {AiFillLike, AiFillDislike} from 'react-icons/ai';
const VideoReaction = ({ reaction }) => {
  const [likes, setLikes] = useState(reaction?.likeCount || 0);
  const [dislikes, setDislikes] = useState(reaction?.dislikeCount || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () =>{
    if(isLiked){
        setLikes(prev => parseInt(prev) + 1);
        setIsLiked(false);
    } else {
        setLikes(prev => parseInt(prev) - 1);
        setIsLiked(true);
        
        // If user was disliked, remove dislike
        if(isDisliked) {
            setDislikes(prev => parseInt(prev) - 1);
            setIsDisliked(false);
        }
    }
  }

  const handleDislike = () =>{
    if(isDisliked){
        // Remove dislike
        setDislikes(prev => parseInt(prev) - 1);
        setIsDisliked(false);
    } else {
        // Add dislike
        setDislikes(prev => parseInt(prev) + 1);
        setIsDisliked(true);
        
        // If user had liked, remove like
        if(isLiked) {
            setLikes(prev => parseInt(prev) - 1);
            setIsLiked(false);
        }
    }
  }

  const formatCount = (count) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };
  return (
    <div>
      <button onClick={handleLike} className={`m-2 p-2 rounded-lg ${isLiked ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
        <AiFillLike /> {formatCount(likes)}
      </button>
      <button onClick={handleDislike} className={`m-2 p-2 rounded-lg ${isDisliked ? 'bg-red-500 text-white' : 'bg-gray-200'}`}>
        <AiFillDislike /> {formatCount(dislikes)}
      </button>
    </div>
  )
}

export default VideoReaction