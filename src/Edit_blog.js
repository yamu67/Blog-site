import { useParams } from "react-router-dom";
import { useState } from 'react'
import './Add_blog.css'

const EditBlog = (props) =>{
    const [title,setTile] = useState('')
    const [desc,setDesc] = useState('')
    const [imgUrl,setImgUrl] = useState('')
    const [aname,setAName] = useState('')
    const params = useParams();
    // console.log(params)
    // console.log(props)
    const blogDet = props.blogdata.filter(_id => _id._id == params.blogId);
    function titleChangeEvent(event){
        setTile(event.target.value)
        // console.log(title)
    }
    function descChangeEvent(event){
        setDesc(event.target.value)
        // console.log(desc)
    }
    function imgurlChangeEvent(event){
        setImgUrl(event.target.value)
        // console.log(imgUrl)
    }
    function anameChangeEvent(event){
        setAName(event.target.value)
        // console.log(aname)
    }
    // function dateChangeEvent(event){
    //     setDate(event.target.value)
    //     // console.log(date)
    // }
    
    return(
        <div className='add-container'>
            <h3>Add Blog Data Form  </h3>
            <form onSubmit={props.onUpdate}>
                <label>Title</label>
                <input type='text' className='form-control' id='title' onChange={titleChangeEvent} defaultValue={blogDet[0].title}></input>
                <label>Description</label>
                <input type='text' className='form-control' id='desc' onChange={descChangeEvent} defaultValue={blogDet[0].description}></input>
                <label>Image URL</label>
                <input type='text' className='form-control' id='img_url' onChange={imgurlChangeEvent} defaultValue={blogDet[0].imgurl}></input>
                <label>Author name</label>
                <input type='text' className='form-control' id='a_name' onChange={anameChangeEvent} defaultValue={blogDet[0].author.name}></input>
                <input type='hidden' id='blog_id' defaultValue={blogDet[0]._id}></input>

                {/* <label>Date</label> */}
                {/* <input type='text' className='form-control' id='date' onChange={dateChangeEvent}></input> */}
                <button type='submit'>Update info</button> 
            </form>
        </div>
    )
}

export default EditBlog;