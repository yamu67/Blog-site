import { useParams } from "react-router-dom";
import './blog_list.css'
import {NavLink} from 'react-router-dom'

function BlogSingle(props) {
    const params = useParams();
    // console.log(params.blogId);
    // console.log("blogdata", props.blogdata)
    const blogDet = props.blogdata.filter(_id => _id._id == params.blogId);
    // console.log("BLOG", blogDet);
    return(
        <div>
        <div className="single-blog-container">
            <div className="blog-thumbnail col-1">
                <div className="img-wrapper img-height">
                    <img src={blogDet[0].imgurl}></img>
                </div>
                <div className='blog-content'>
                    <div className='blog-content-header'>
                        {blogDet[0].title}
                    </div>
                    <div className='blog-content-desc'>
                        {blogDet[0].description}
                    </div>
                    <div className='blog-meta'>
                        <div className='author-name'>
                            {blogDet[0].author.name}
                        </div>
                        <div className='date'>
                            {blogDet[0].date}
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        <NavLink to={`/editBlog/${blogDet[0]._id}`}>
            <button type='button' className='button'>Edit blog</button>
        </NavLink>
        <NavLink to={`/deleteBlog/${blogDet[0]._id}`}>
                <button type='button' className='button'>Delete Blog</button>
        </NavLink>   
        </div>
    )
}

export default BlogSingle