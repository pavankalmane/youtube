import {comments} from "../utilities/assets/commentsData";
import CommentsInfo from "./CommentsInfo";
const Comments = () => {
  return (
    <div className="h-96  overflow-y-scroll w-full scrollbar-hide">
        <h1>Comments</h1>
        {comments.map((comment,id)=>(
            <CommentsInfo key={id} data={comment}/>
        ))}
    </div>
    
  )
}

export default Comments