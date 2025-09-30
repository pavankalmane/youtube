import {AiOutlineUser} from "react-icons/ai"

const CommentsInfo = ({data}) => {
    const {name, text, replies} = data;
  return (
    <div className="m-2 p-2 bg-white-100 shadow-sm rounded-lg">
        <div className="flex items-center ml-0 mb-2 font-bold">
            <AiOutlineUser className="mr-2 text-gray-600" />
            <p className="text-gray-800 text-base">{name}</p>
        </div>
        <div className="ml-8 mt-0 text-gray-600 text-sm">
            <p>{text}</p>
        </div>     
        {replies && replies.length > 0 && (
            <div className="ml-8 mt-2">
                {replies.map((reply) => (
                    <CommentsInfo key={reply.id} data={reply} />
                ))}
            </div>
        )}
    </div>
  )
}

export default CommentsInfo