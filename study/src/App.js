

import React, { useState,useRef } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/classCounter';
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: ' аа', body: 'кк' },
    { id: 2, title: ' бб', body: 'ее' },
    { id: 3, title: ' вв' , body: 'нн' }
  ])

const[selectedSort, setSelectedSort] =useState('')
const[searchQuery, setSearchQuery]=useState('')

function getSortedPosts() {
  if(selectedSort) {
    return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
  }
  return posts
}

const sortedPosts =getSortedPosts() 


const createPost =(newPost)=> {
setPosts([...posts,newPost])
}

const removePost = (post) => {
  setPosts(posts.filter(p=> p.id !== post.id))
}

const sortPosts =(sort) => {
  setSelectedSort(sort); 
}
 


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}}/>
      <div>
        <MyInput
        value={searchQuery}
        onChange={e=> setSearchQuery(e.target.value)}
        placrholder="Поиск..."
        />


        <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          {value:'title', name:'По названию'},
          {value:'body', name:"по описанию "}

        ]}

        
        
        />
      </div>

      {posts.length !==0
      ? <PostList remove={removePost} posts ={sortedPosts} title="Посты про JS"/>
      : <h1 style={{textAlign:'center'}}> Посты не найдены</h1>
      
    }
     
         
    </div> 

  )
}

export default App;
