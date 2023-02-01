import { Post } from '../interfaces/Post';

interface PostInListProps{
    post: Post
}

function PostList(props:PostInListProps){
    return(
        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.thought}</p>
        </div>
    )
}
export default PostList