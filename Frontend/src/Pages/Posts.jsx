
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserPost from "../Components/UserPost";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const localUser = JSON.parse(localStorage.getItem("user")) || {
    name: false,
    isAuth: false,
    token: false,
  };

  const [user, setUser] = useState(localUser);
  
  const { isAuth, name, token } = user;

  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();
  console.log("allPosts", allPosts);


  const getAllPosts = async (token) => {
    const url = `https://fitlyfe.onrender.com/allposts`;
    const res = await axios.get(url);
    console.log(res);
    console.log("Get post", res);
    setAllPosts(res.data);
  };

  const deleteHandler = async (id, token) => {
    const url = `https://fitlyfe.onrender.com/posts/delete/${id}`;
    const config = {
      headers: { Authorization: `${token}` },
    };
    const res = await axios.delete(url, config);
    console.log("Delete request response", res);
    getAllPosts();
  };

  const likeHandler = async (id, token) => {
    const url = `https://fitlyfe.onrender.com/posts/delete/${id}`;
    const config = {
      headers: { Authorization: `${token}` },
    };
    const res = await axios.delete(url, config);
    console.log("Delete request response", res);
    getAllPosts();
  };

 

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <h2
        onClick={() => navigate("/mystory")}
        style={{
          marginTop: "1rem",
          color: "#333",
          fontWeight: "500",
          fontSize: "18px",
          textAlign: "left",
          marginLeft: "6rem",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        My Story
      </h2>

      <h2
        style={{
          marginTop: "1rem",
          color: "#333",
          fontWeight: "500",
          fontSize: "18px",
        }}
      >
        Our Stories
      </h2>
      <div className='posts'>
        {allPosts.map((e) => (
          <UserPost key={e._id} {...e} likeHandler={likeHandler} />
        ))}
      </div>
    </>
  );
};

export default Posts;
