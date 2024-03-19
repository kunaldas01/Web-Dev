import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { }
});

function postListReducer(currPostList, action) {
  let newPostList = currPostList;

  if (action.type === "GET_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  else if (action.type === "ADD_POST") {
    newPostList = [action.payload.post, ...currPostList];
  }
  else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => post.id !== action.payload.id);
  }
  return newPostList;
}

function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  // const [fetching, setFetching] = useState(false);

  function getInitialPosts(posts) {
    dispatchPostList({
      type: "GET_INITIAL_POSTS",
      payload: {
        posts
      }
    });
  }

  function addPost(post) {
    console.log(post);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post
      }
    });
  }

  function deletePost(id) {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id: id
      }
    });
  }

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
}

export default PostListProvider

