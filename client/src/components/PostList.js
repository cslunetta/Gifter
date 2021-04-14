import { Button } from "reactstrap";
import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";
import { useHistory } from "react-router";

const PostList = () => {
  const { posts, getAllPosts } = useContext(PostContext);

  const history = useHistory();

  const handleAddPostClick = () => {history.push("/addPost")}

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <div className="container left-justify">
        <Button color="primary" onClick={handleAddPostClick}>Add Post</Button>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="cards-column">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;