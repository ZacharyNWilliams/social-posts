
import {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";




import { Post } from '../interfaces/Post';
import { PostForm } from './PostForm';
import PostList from './PostInList';

function SocialPosts(){

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
   
    const [posts, setPosts] = useState<Post[]>([
             // Array that displays posts
            // {title: "yo", thought:"yoo"}
    
    ])
    const handleDelete = (index: number) => {
        setPosts(posts.filter((_, i) => i !== index));
      };
        
 


    function addPost(post:Post){
        setPosts([...posts,post]);

    }
    function handlePostFormDelete(index: number) {
        setPosts((prev) => [
          ...prev.slice(0, index),
          ...prev.slice(index + 1),
        ]);
      }
    return(
      <div className="App">
        
        <ul>
                   
           <div id='thought-button-div'>
                               
            <Button id='Show-hide'  color="danger" onClick={toggle}>New Thought</Button>
           </div>
                    
         </ul>
            
        
     
    <div>
    {posts.map((post, index) => (
          <PostList
            key={index}
            post={post}
            onDelete={() => handleDelete(index)}
          />
        ))}
        
    <Modal isOpen= {modal} toggle = {toggle}>
    <PostForm addPost={addPost}/>
    </Modal>
    </div>
   
    <div>
   
   
    </div>
   

     
    
 
       </div>
    )
}

export default SocialPosts;

