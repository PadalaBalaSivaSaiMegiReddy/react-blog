import "./post.css";
import {Link} from "react-router-dom";
export default function Post({post}) {
  return (
    <div className="post">
      {post.photo && <img src="https://images.unsplash.com/photo-1611307742746-43cbea512c37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww" alt="" className="postImg"/>}
        

        <div className="postInfo">
            <div className="postCats">
              {post.categories.map((c)=>(<span className="postCat">{c.name}</span>))}
                
            </div>
            <Link to={`/post/${post._id}`} className="link">

            <span className="postTitle">{post.title}</span>
            </Link>
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
    </div>
    <p className="postDesc">{post.desc}
    </p>
    </div>
  )
}
