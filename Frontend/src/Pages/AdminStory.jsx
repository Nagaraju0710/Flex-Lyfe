
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../Admin/AdminNav";
import AdminPost from "../Components/AdminPost";

const AdminStory = () => {
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
    const url = `https://fitlyfe.onrender.comallposts`;
    const res = await axios.get(url);
    console.log(res);
    console.log("Get post", res);
    setAllPosts(res.data);
  };

  const deleteHandler = async (id, token) => {
    console.log(token)
    console.log(id)
    const url = `https://fitlyfe.onrender.com/allposts/delete/${id}`;
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
     <AdminNavbar/>
      <h2
        style={{
          marginTop: "1rem",
          color: "#333",
          fontWeight: "500",
          fontSize: "18px",
        }}
      >
        All Stories
      </h2>
      <div className='posts'>
        {allPosts.map((e) => (
          <AdminPost key={e._id} {...e} deleteHandler={deleteHandler} />
        ))}
      </div>
    </>
  );
};

export default AdminStory;
