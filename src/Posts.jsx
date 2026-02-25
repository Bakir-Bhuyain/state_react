import { use } from "react"
import Post from "./Post";
export default function Posts({ postsPromise }) {
      const posts = use(postsPromise);
      console.log(posts);
      return (
            <div>
                  <h3>All post are here:{posts.length}</h3>
                  {
                        posts.map(post => <Post post={post}></Post>)
                  }
            </div>
      )
}