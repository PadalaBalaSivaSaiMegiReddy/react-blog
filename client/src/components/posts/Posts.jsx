import Post from '../post/Post'
import  './posts.css'

const Posts = ({posts}) => {
  return (
    <div className='posts'>
      {posts.map((p)=>{
        return <Post key={p} post={p}/>
      })}
    </div>
  )
}

export default Posts