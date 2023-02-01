
import {useState} from 'react'




import { Post } from '../interfaces/Post';
import { ContactForm } from './PostForm';
import PostList from './PostInList';

function SocialPosts(){
   
    const [posts, setPosts] = useState<Post[]>([       
        {title: "Boness", thought: "Corgiato"},
        {title: "Bonesaroonie", thought: "Corgiate"},
        {title: "Bonesamania", thought: "Corgilaraati"},])
        
    const [hidden, setHidden] = useState(false);

    const [formOpen, setFormOpen] = useState(false);

    function addPost(post:Post){
        setPosts([...posts,post]);
        setHidden(false);
        setFormOpen(false);
    }
    function handlePostFormDelete(index: number) {
        setPosts((prev) => [
          ...prev.slice(0, index),
          ...prev.slice(index + 1),
        ]);
      }
    return(
        <div>
          
        <div>
            <ContactForm addPost={addPost}/>
            {posts.map((post) => <PostList post = {post}/>)}
        </div>
       </div>
    )
}

export default SocialPosts;