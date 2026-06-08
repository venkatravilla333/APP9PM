import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./actionTypes"


let fecthPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}
let fecthPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}
let fecthPostsFailure = (err) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: err
  }
}

export let fetchPost = () => {
  return (dispatch) => {
    dispatch(fecthPostsRequest()) // loading (UI)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.json()
      }).then((data) => {
        console.log(data)
        dispatch(fecthPostsSuccess(data))
      }).catch((err) => {
        console.log(err)
        dispatch(fecthPostsFailure(err.message))
    })
   }
  
}