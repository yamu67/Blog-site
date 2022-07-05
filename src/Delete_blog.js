import { useParams } from "react-router-dom";
import './Add_blog.css'

const DeleteBlog = (props) =>{
    const params = useParams();
    const blogDet = props.blogdata.filter(_id => _id._id === params.blogId);
    return(
        <div>
            <h1>The blog title {blogDet[0].title}.</h1>
            <form>
            <input type='hidden' id='blog_id' defaultValue={blogDet[0]._id}></input>
            <button type='submit' onClick={props.onDelete}>Confirm</button>
            </form>
        </div>
    )

}

export default DeleteBlog;