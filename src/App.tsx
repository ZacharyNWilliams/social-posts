import React from 'react';
import logo from './logo.svg';
import './App.css';
import'/Users/williams/Grand_Circus/labs/social-posts/src/css/SocialPosts.css'
import socialPosts from './components/SocialPosts';
import SocialPosts from './components/SocialPosts';

function App() {
  return (
<div>
<h1 className='main-title'>My thoughts</h1>
<div id='thought-div'>
<button id='thought-button'>New Thought</button>
</div>
<SocialPosts/>
</div>

  );
}

export default App;
