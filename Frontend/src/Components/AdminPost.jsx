
const AdminPost = ({ title, desc, name, _id, updateHandler, deleteHandler }) => {
  const { isAuth, token } = JSON.parse(localStorage.getItem("user")) || {
    isAuth: false,
    token: false,
  };


  return (
    <div className='post'>
      <h2>{title}</h2>
      <p style={{ marginTop: "-1rem" }}>@{name}</p>
      <p>{desc}</p>
      <div>
        <button onClick={() => deleteHandler(_id, token)} className='btn'>
          delete
        </button>
      </div>
    </div>
  );
};

export default AdminPost;
