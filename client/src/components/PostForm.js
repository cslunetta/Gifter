import React, { useContext, useState} from "react";
import { PostContext } from "../providers/PostProvider";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import {useHistory} from "react-router-dom";

// form to add posts to the database.
const PostForm = () => {
    const { addPost } = useContext(PostContext);

    // defining the initial state of the form
    const [posts, setPosts] = useState({
        userProfileId: localStorage.current_user,
        title: "",
        imageUrl: "",
        caption: "",
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newPost = { ...posts };
        let selectedVal = event.target.value;

        // convert string from form to int
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal);
        }
        newPost[event.target.id] = selectedVal;
        setPosts(newPost);
    }

    const handleSavePost = (event) => {
        event.preventDefault();
        addPost(posts).then(() => history.push("/"));
    };

    return (
        <div className="container">
            <Form className="postForm">
                <h2>Add Post</h2>
                <fieldset>
                    {/* <FormGroup> */}
                        {/* <Label htmlFor="title">Title</Label> */}
                        {/* <Input 
                            type="hidden" 
                            id="userProfileId"
                            onChange={handleControlledInputChange}
                            required
                            autoFocus
                            className="form-control"
                            value={localStorage.current_user}
                        />
                    </FormGroup> */}
                </fieldset>
                <fieldset>
                    <FormGroup>
                        <Label htmlFor="title">Title</Label>
                        <Input 
                            type="text" 
                            id="title"
                            onChange={handleControlledInputChange}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="Add Title"
                            value={posts.title} 
                        />
                    </FormGroup>
                </fieldset>
                <fieldset>
                    <FormGroup>
                        <Label htmlFor="imageUrl">Image Url</Label>
                        <Input 
                            type="text" 
                            id="imageUrl" 
                            onChange={handleControlledInputChange}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="Add Image Url"
                            value={posts.imageUrl}
                        />
                    </FormGroup>
                </fieldset>
                <fieldset>
                    <FormGroup>
                        <Label for="caption">Caption</Label>
                        <Input 
                            type="text"
                            id="caption"
                            onChange={handleControlledInputChange}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="Add Caption"
                            value={posts.caption}
                        />
                    </FormGroup>
                </fieldset>
                <Button className="btn form-btn" color="primary" onClick={handleSavePost}>
                Save</Button>
                <Button className="btn form-btn" color="primary" onClick={()=> history.push("/")}>Back</Button>
            </Form>
        </div>
    )
};

export default PostForm;