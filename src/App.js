import { useEffect, useState } from 'react'
import './App.css';
import Header from './Header';
import BlogList from './blog_list';
import AddBlog from './Add_blog';
import { Redirect, Route } from 'react-router-dom';
import BlogSingle from './BlogSingle';
import EditBlog from './Edit_blog';
import DeleteBlog from './Delete_blog';


function App() {
const [blog, setBlog] = useState([]);
useEffect(() => {
  fetch('http://localhost:5600/',{ method : 'GET',
    headers : new Headers({'content-type' : 'application/json'}),
    async : true
  })
.then(function(response){
  
  return response.text();
}).then(function(text){
  setBlog(JSON.parse(text));
});}
,[]);

// console.log("Data",blog);

function addInfo(event){
  event.preventDefault();
  // console.log(event)
  let blogTitle = document.getElementById('title').value
  let blogDesc = document.getElementById('desc').value
  let blogImgUrl = document.getElementById('img_url').value
  let blogAname = document.getElementById('a_name').value
  if(blogTitle === '' || blogDesc === '' || blogImgUrl === '' || blogAname === ''){
      document.getElementById('title').classList.add('error')
      alert('Please fill all the fields')
      return
  }
  const blogData = {

          "imgurl": blogImgUrl,
          "title": blogTitle,
          "description": blogDesc,
          "author": {
              "authorid": 2,
              "imgUrl": '',
              "name": blogAname,
              "date": "11/06/2022"
              }   
          }
  console.log(blogData)
  try{
    fetch('http://localhost:5600/save',{ method : 'POST',
      headers : new Headers({'content-type' : 'application/json'}),
      body : JSON.stringify(blogData),
  }).then(function(response){
    return response.text();
  }).then(function(text){
    console.log(text)
  });}
  catch(err){
    alert(err)}
  setBlog((previousBlog) => {
    return [...previousBlog, blogData]
  });
}

function updateInfo(event){
  event.preventDefault();
  let blogTitle = document.getElementById('title').value
  let blogDesc1 = document.getElementById('desc').value
  let blogImgUrl = document.getElementById('img_url').value
  let blogAname = document.getElementById('a_name').value
  let blogId = document.getElementById('blog_id').value
  if(blogTitle === '' || blogDesc1 === '' || blogImgUrl === '' || blogAname === ''){
      document.getElementById('title').classList.add('error')
      alert('Please fill all the fields')
      return
  }
  const blogData = {
          "_id": blogId,
          "imgurl": blogImgUrl,
          "title": blogTitle,
          "description": blogDesc1,
          "author": {
              "imgUrl": '',
              "name": blogAname,
              "date": "11/06/2022"
              }   
          }
  console.log(blogData)
  try{
    fetch('http://localhost:5600/update',{ method : 'POST',
      headers : new Headers({'content-type' : 'application/json'}),
      body : JSON.stringify(blogData),
  }).then(function(response){
    return response.text();
  }).then(function(text){
    console.log(text)
  });}
  catch(err){
    alert(err)}
  setBlog((previousBlog) => {
    return [...previousBlog, blogData]
  });

}

function deleteInfo(event){
event.preventDefault();
let blogId = document.getElementById('blog_id').value
const blogData = {
  "_id": blogId
  }
console.log(blogData)
try{
fetch('http://localhost:5600/delete',{ method : 'POST',
headers : new Headers({'content-type' : 'application/json'}),
body : JSON.stringify(blogData),
}).then(function(response){
return response.text();
}).then(function(text){
console.log(text)
});}
catch(err){
alert(err)}
setBlog((previousBlog) => {
return [...previousBlog, blogData]
});
}


  return (
    <div className="App">
      <Header></Header>
      <Route path="/addblog">
      <AddBlog onFormSubmit={addInfo}></AddBlog>
      </Route>
      <Route path="/blogList">
      <BlogList blogdata={blog}></BlogList>
      </Route>
      <Route path="/BlogSingle/:blogId">
      <BlogSingle blogdata={blog}></BlogSingle>
      </Route>
      <Route path="/editBlog/:blogId">
      <EditBlog onUpdate={updateInfo} blogdata={blog}></EditBlog>
      </Route>
      <Route path="/deleteBlog/:blogId">
        <DeleteBlog onDelete={deleteInfo} blogdata={blog}></DeleteBlog>
      </Route>

    </div>
  );
}

export default App;
