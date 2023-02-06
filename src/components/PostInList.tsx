import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Post } from '../interfaces/Post';
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useState } from 'react';
import { PostForm } from './PostForm';



interface PostInListProps{
    post: Post;
    
}

function PostList({post, onDelete}: { post: Post, onDelete: () => void }){

    const [posts, setPosts] = useState<Post[]>([    
      ])

    const removeElement = (index: number) => {
        const newPosts = posts.filter((_, i) => i !== index);
        setPosts(newPosts);
      };
    return(
        <div>
       
        
        <div className='post-list'>
            
            <h1>{post.title}</h1>
            <p>{post.thought} </p>



            <div id='trash-icon'>
            <button onClick={onDelete} > 
            <FontAwesomeIcon  icon={faTrash} />
            </button>
       
            </div>
            
            
        
        </div>
        </div>
    )
}

export default PostList
