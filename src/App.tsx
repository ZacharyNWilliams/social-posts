import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import'/Users/williams/Grand_Circus/labs/social-posts/src/css/SocialPosts.css'
import socialPosts from './components/SocialPosts';
import SocialPosts from './components/SocialPosts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {
  let [isOn, setIsOn] = useState<boolean>(false);
// function ShowOrHide(){

// }

function setOffOrOn(){
        isOn ? setIsOn(true) : setIsOn(true);
    }
    

let showForm =  (isOn ? "whole-form-div-show" : "");

  return (
   

<div className={showForm}>

<h1 className='main-title'>My thoughts</h1>

<SocialPosts/>


</div>

  );
}

export default App;
