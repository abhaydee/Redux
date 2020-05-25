import { FETCH_POSTS, NEW_POST } from "./types";

export function fetchPosts() {
  return function (dispatch) {
      console.log("ap cations")
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts,
        })
      )
      .catch((error) => console.log(error));
  };
}

export function newPosts(postdata){
    return function(dispatch){
        console.log("hitting the new posts actions")
        fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postdata),
    })
      .then((response) => response.json())
      .then((newpost) => dispatch({
        type:NEW_POST,
        payload:newpost
    }) );
       
    }
}
