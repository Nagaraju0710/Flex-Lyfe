import React, { useState } from "react";

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
        <h2>{title}</h2>
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

      <div>
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

        <button
          style={{ background: "#4696FF" }}
          onClick={() => deleteHandler(_id, token)}
          className='btn'
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Post;
