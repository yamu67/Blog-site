import { NavLink } from 'react-router-dom'
import './blog_list.css'

const BlogList = (props) => {
// console.log(props)
    return(
        <div>
            <NavLink to='/addBlog'>
            <button type='button' className='button'>+ Add New Blog</button>
            </NavLink>
            <div className="blog-container">
                {
                    props.blogdata.map(list=>(
                        // console.log(list.id),
                        <NavLink to={`/BlogSingle/${list._id}`}>
                            <div className="blog-thumbnail col-4" key={list.id}>
                            <div className="img-wrapper">
                                <img src={list.imgurl}></img>
                            </div>
                            <div className='blog-content'>
                                <div className='blog-content-header'>
                                    {list.title}
                                </div>
                                <div className='blog-content-desc'>
                                    {list.description}
                                </div>
                                <div className='blog-meta'>
                                    <div className='author-name'>
                                        {list.author.name}
                                    </div>
                                    <div className='date'>
                                        {list.date}
                                    </div>
                                </div>                                
                            </div>
                            </div>
                        </NavLink>
                    ))
                } 
            </div>
        </div>
    )
}

export default BlogList