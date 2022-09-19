import React, {useState, useEffect} from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'

function Feed( {username}) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
    const res = username
      ? await axios.get("/posts/profile/" + username)
      : await axios.get("posts/timeline/6325d1bea87ac1e31f6d05b4")
    setPosts(res.data);
    };
    fetchPosts()
  }, [])


  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map(p => (
          <Post key={p._id} post={p}/>
      ))}
      </div>
    </div>
  )
}

export default Feed
