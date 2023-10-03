import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const UserPost = ({ title, desc, name, _id, updateHandler, deleteHandler }) => {
  const [titleValue, setTitleValue] = useState(title);
  const [descValue, setDescValue] = useState(desc);
  const [editing, setEditing] = useState(false);
  const location = useLocation()
  const { isAuth, token } = JSON.parse(localStorage.getItem("user")) || {
    isAuth: false,
    token: false,
  };

  const handleUpdate = () => {
    setEditing(true);
  };

  return (
    <div className='post'>
      {editing ? (
        <input
          onChange={(e) => setTitleValue(e.target.value)}
          type='text'
          value={titleValue}
        />
      ) : (
        <h2>{title}</h2>
      )}
      <p style={{marginTop: '-1rem'}}>@{name}</p>
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

      

      <div>
        {editing ? (
          <button
            // style={{ background: "#4696FF" }}
            onClick={() => {
              setEditing(true);
              updateHandler(
                { title: titleValue, desc: descValue },
                _id,
                token
              );
            }}
            className='btn'
          >
            like
          </button>
        ) : (
          <button
            // style={{ background: "#4696FF" }}
            onClick={handleUpdate}
            className='btn'
          >
            like
          </button>
        )}

        <button
          // style={{ background: "#4696FF" }}
          onClick={() => deleteHandler(_id, token)}
          className='btn'
        >
          dislike
        </button>
      </div>
    </div>
  );
};

export default UserPost;
