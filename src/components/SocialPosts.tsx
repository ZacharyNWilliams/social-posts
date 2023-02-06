
import {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";




import { Post } from '../interfaces/Post';
import { PostForm } from './PostForm';
import PostList from './PostInList';

function SocialPosts(){

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
   
    const [posts, setPosts] = useState<Post[]>([
            {title: "yo", thought:"yoo"}
    
    ])
    const handleDelete = (index: number) => {
        setPosts(posts.filter((_, i) => i !== index));
      };
        
    const [fruits, setFruits] = useState([
        "🍎 Apple",
        "🍊 Orange",
        "🍌 Banana",
        "🍇 Grapes",
      ]);

      const deleteByValues = (value: string) => {
        setFruits(oldValues => {
          return oldValues.filter(fruit => fruit !== value)
        })
      }
      const deleteByValue = (value: string) => {
        setFruits(oldValues => {
          return oldValues.filter(fruit => fruit !== value)
        })
      }


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
        <div >
            <div>
                <ul>
                   
                            <div id='thought-button-div'>
                               
                                <Button id='Show-hide'  color="danger" onClick={toggle}>New Thought</Button>
                            </div>
                    \
                </ul>
            </div>
        <div className="App">
     
    </div>
    
            <Modal isOpen= {modal} toggle = {toggle}>
                <ModalHeader>

                </ModalHeader>
                <ModalBody>
                <PostForm addPost={addPost}/>
                </ModalBody>
            </Modal>
            
            {posts.map((post, index) => (
          <PostList
            key={index}
            post={post}
            onDelete={() => handleDelete(index)}
          />
        ))}
           
            {/* {posts.map((post) => <PostList post={post} onDelete={function (): void {
                throw new Error('Function not implemented.');
            } }/>)} */}
       
       </div>
    )
}

export default SocialPosts;

