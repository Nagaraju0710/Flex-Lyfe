import React, { useState } from "react";
import deleteImg from '../images/delete.png'

const Post = ({ title, desc, device, _id, updateHandler, deleteHandler }) => {
  const [titleValue, setTitleValue] = useState(title);
  const [descValue, setDescValue] = useState(desc);
  const [editing, setEditing] = useState(false);
  const [deviceValue, setDeviceValue] = useState(device);

  const { isAuth, name, token } = JSON.parse(localStorage.getItem("user")) || {
    name: false,
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
        <h2 style={{fontSize: '1.2rem',marginBottom: '1rem', color: '#215b99'}} >{title}</h2>
      )}
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

      <div className="post-icon">
        {editing ? (
          <button
            style={{ background: "#4696FF" }}
            onClick={() => {
              setEditing(true);
              updateHandler(
                { title: titleValue, desc: descValue, device: deviceValue },
                _id,
                token
              );
            }}
            className='btn'
          >
            update
          </button>
        ) : (
          <button
            style={{ background: "#4696FF" }}
            onClick={handleUpdate}
            className='btn'
          >
            edit
          </button>
        )}

        {/* <button
          style={{ background: "#4696FF" }}
          onClick={() => deleteHandler(_id, token)}
          className='btn'
        >
          delete
        </button> */}

        <img
          className='delete-img'
          onClick={() => deleteHandler(_id, token)}
          src={deleteImg}
          alt=''
        />
      </div>
    </div>
  );
};

export default Post;
