
const AdminPost = ({ title, desc, name, _id, updateHandler, deleteHandler }) => {
  const { isAuth, token } = JSON.parse(localStorage.getItem("user")) || {
    isAuth: false,
    token: false,
  };


  return (
    <div className='post'>
      <h2  style={{fontSize: '1.2rem',marginBottom: '1rem', color: '#215b99'}}>{title}</h2>
      <p className="userName" style={{ marginTop: "-1rem" }}>@{name}</p>
      <p >{desc}</p>
      <div>
        <button onClick={() => deleteHandler(_id, token)} className='btn'>
          delete
        </button>
      </div>
    </div>
  );
};

export default AdminPost;
