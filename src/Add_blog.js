import { useState } from 'react'
import './Add_blog.css'

const AddBlog = (props) =>{
    const [title,setTile] = useState('')
    const [desc,setDesc] = useState('')
    const [imgUrl,setImgUrl] = useState('')
    const [aname,setAName] = useState('')
    const [date,setDate] = useState('')

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
            <form onSubmit={props.onFormSubmit}>
                <label>Title</label>
                <input type='text' className='form-control' id='title' onChange={titleChangeEvent}></input>
                <label>Description</label>
                <input type='text' className='form-control' id='desc' onChange={descChangeEvent}></input>
                <label>Image URL</label>
                <input type='text' className='form-control' id='img_url' onChange={imgurlChangeEvent}></input>
                <label>Author name</label>
                <input type='text' className='form-control' id='a_name' onChange={anameChangeEvent}></input>
                {/* <label>Date</label> */}
                {/* <input type='text' className='form-control' id='date' onChange={dateChangeEvent}></input> */}
                <button type='submit'>Add info</button> 
            </form>
        </div>
    )
}

export default AddBlog;