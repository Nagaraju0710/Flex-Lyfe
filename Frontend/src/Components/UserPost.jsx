import { useLocation } from "react-router-dom";
import like from "../images/Like.png";

import unLike from "../images/Unlike.png";
import deleteImg from "../images/delete.png";
import { useState } from "react";

const UserPost = ({ title, desc, userId, name, likes, _id, likeHandler }) => {
  const [titleValue, setTitleValue] = useState(title);
  const [descValue, setDescValue] = useState(desc);
  const [editing, setEditing] = useState(false);
  const [isLike , setIsLike] = useState(false);
  const location = useLocation();

  const { isAuth, token } = JSON.parse(localStorage.getItem("user")) || {
    isAuth: false,
    token: false,
  };

  const handleUpdate = async() => {

    if (!isLike && !likes.includes(userId)) {
      likeHandler(_id, { likes: [...likes, userId] });
    }

    // exclude like

    if (isLike && likes.includes(userId)) {
      // let filterLikes = likes.filter((e) => e.userId != userId);
      // console.log('filterLikes',filterLikes)
      await likeHandler(_id, { likes: [] });
    }
    
    window.location.reload()

    // if (likes.includes(userId)) {
    //   setIsLike(true);
    // } else {
    //   setIsLike(false);
    // }


  };

  useState(()=>{
    if (likes.includes(userId)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  },[])

  return (
    <div className='post'>
      {editing ? (
        <input
          onChange={(e) => setTitleValue(e.target.value)}
          type='text'
          value={titleValue}
        />
      ) : (
        <h2
          style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "#215b99" }}
        >
          {title}
        </h2>
      )}
      <p className='userName' style={{ marginTop: "-1rem" }}>
        @{name}
      </p>
      {editing ? (
        <textarea
          onChange={(e) => setDescValue(e.target.value)}
          value={descValue}
          cols='10'
          rows='4'
        >
          {desc}
        </textarea>
      ) : (
        <p>{desc}</p>
      )}

      <div className='post-icon'>
        <img
          className='like-img'
          src={isLike ? unLike : like}
          onClick={handleUpdate}
          alt='Like'
        />
        {/* <img  className="delete-img" onClick={() => deleteHandler(_id, token)} src={deleteImg} alt="" /> */}
      </div>
    </div>
  );
};

export default UserPost;
