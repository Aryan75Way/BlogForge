import { getCommentsOnPost } from "@/lib/actions/comment.action";

const AllComments = async ({postId} :{postId:number}) => {
    const comments = await getCommentsOnPost(postId);
    console.log(comments)
  return (
    <div className="mt-5">
        {comments.map((comment:any) => (
            <div className="p-2" key={comment.id}>
                <div>{comment.content}</div>
                <div className="text-sm">- {comment.author.name}</div>
            </div>
        )) }
    </div>
  )
}

export default AllComments
