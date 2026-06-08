import React from 'react'
import { store } from '../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../Redux/actionCreators'

function H() {
  console.log('render')
  
 let state = useSelector((state) => {
   return state.postsReducer
 })
  
  let dispatch = useDispatch()

  console.log(state)
  return (
    <div>
      <h4>H Component</h4>
      <button onClick={()=>dispatch(fetchPost())}>get posts</button>
      {
        state.loading ? <h3>Loading</h3> : state.error ? <h4>{state.error}</h4> : 
          state.posts.map((post) => {
            return <div>
              <h4>userId: {post.userId}</h4>
              <h4>Id: {post.id}</h4>
              <h4>Title: {post.title}</h4>
              <h4>Body: {post.body}</h4>
            </div>
          })
      }
    </div>
  )
}

export default H