// react modules
import React from "react";
import { Route } from "react-router-dom";

import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./App.css";

function App() {
  return (
    <>
      <PostProvider>
        <Route exact path="/">
          <PostList />
        </Route>

        <Route path="/addPost">
          <PostForm />
        </Route>
      </PostProvider>
    </>
  );
}

export default App;