
import React, { useEffect, useState } from "react";
import Post from "../Components/Post";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import UserPost from "../Components/UserPost";

const MyStory = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const localUser = JSON.parse(localStorage.getItem("user")) || {
    name: false,
    isAuth: false,
    token: false,
  };

  const [user, setUser] = useState(localUser);
  const { isAuth, name, token } = user;
  const [post, setPost] = useState([]);
  const toast = useToast();

  const getPost = async (token) => {
    const url = `https://fitlyfe.onrender.com/posts`;
    const config = {
      headers: { Authorization: `${token}` },
    };
    const res = await axios.get(url, config);
    console.log("Get post", res);
    setPost(res.data);
  };


  const addPost = async (post, token) => {
    console.log(post);
    const url = `https://fitlyfe.onrender.com/posts/add`;
    const config = {
      headers: { Authorization: `${token}` },
    };

    const res = await axios.post(url, post, config);
    if (res.status == 200) {
      // alert("New post create");
      toast({
        title: "New story added",
        // description: "We've created your account for you.",
        position: "top",
        status: "success",
        duration: 500,
        isClosable: true,
      });
    }
    console.log("res", res);
   
    getPost(token);
  };

  const deleteHandler = async (id, token) => {
    const url = `https://fitlyfe.onrender.com/posts/delete/${id}`;
    const config = {
      headers: { Authorization: `${token}` },
    };
    const res = await axios.delete(url, config);
    if(res.status==200){
      toast({
        title: "Deletion Successful",
        // description: "We've created your account for you.",
        position: "top",
        status: "success",
        duration: 500,
        isClosable: true,
      });
    }
    console.log("Delete request response", res);
    getPost(token);
  };

  const likeHandler = async (id, token) => {
    const url = `https://fitlyfe.onrender.com/posts/update/${id}`;
    const config = {
      headers: { Authorization: `${token}` },
    };
    const res = await axios.delete(url, config);
    console.log("Delete request response", res);
    getPost(token);
  };

  const updateHandler = async (post, id, token) => {
    const url = `https://fitlyfe.onrender.com/posts/update/${id}`;
    const config = {
      headers: { Authorization: `${token}` },
    };
    const res = await axios.patch(url, post, config);
    if (res.status == 200) {
      // alert("post updated");
      toast({
        title: "story successful updated",
        // description: "We've created your account for you.",
        position: "top",
        status: "success",
        duration: 500,
        isClosable: true,
      });
    }
    console.log("Update request response", res);
    getPost(token);
   
    window.location.reload();
  };

  useEffect(() => {
    getPost(token);
  }, []);

  return (
    <>
      <h2
        style={{
          marginTop: "1rem",
          color: "#333",
          fontWeight: "500",
          fontSize: "18px",
        }}
      >
        Add new Story
      </h2>
      <div className='add-post-wrapper'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Title'
        />

        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder='desc'
        />

        <button
          className='btn'
          onClick={() => addPost({ title, desc, likes: [] }, token)}
        >
          Add
        </button>
      </div>

      <h2
        style={{
          marginTop: "1rem",
          color: "#333",
          fontWeight: "500",
          fontSize: "18px",
        }}
      >
        {name}'s Stories ({post.length})
      </h2>

      <div className='posts'>
        {post.map((e) => (
          <Post
            key={e._id}
            {...e}
            updateHandler={updateHandler}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>

    
    
    </>
  );
};

export default MyStory;
