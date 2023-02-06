import * as React from 'react';
import { useState } from 'react';


export interface SocialPostFormProps {
    
    addPost: Function
  }


export function PostForm (props: SocialPostFormProps) {
    const [title, setTitle] = useState<string>('');
    const [thought, setThought] = useState<string>('');
    
   

    function onSubmit(e:React.FormEvent<HTMLElement>){
      e.preventDefault();

      props.addPost({title: title, thought:thought});
    }
   
    
    return (
    <div >
        <div id='whole-form-div'>
            <form onSubmit = {onSubmit}>
                <label id='form-title' >Title</label>
                <input id='form-input' onChange={(e) => setTitle(e.target.value)} type="text"  />
                <label id='form-title'>Thought</label>
                <input  id='form-input' type="text" onChange={(e) => setThought(e.target.value)} />
                {
                <button  type="submit">Add Post</button>
                
}               
            </form>
        </div>
    </div>
    )



}