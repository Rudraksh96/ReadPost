import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Header = () => {


  let user = useSelector((state) => state.userModule.userdetails);
  console.log(user, "user headers List");

  
  

  return (
  
    <nav className="navbar navbar-expand-sm  navbar-dark navbar-fixed">
      <div className="container-fluid">

        <Link to="/ReadPost" >
          <button className='btn btn-primary' style={{ fontWeight: "bold", fontSize: "18px" }}>Redux Posts</button>
        </Link>

        <ul className="navbar-nav">

          <Link to="/Addpost" >
            <button className='btn btn-primary' style={{ fontWeight: "bold", fontSize: "18px" }}>Add Posts</button>
          </Link>

          <li className="nav-item">
            { user.data == undefined ? "":
          
            <button className='btn btn-primary' style={{ fontWeight: "bold", fontSize: "18px" }}> {user.data.newStudent.name}</button>
            
            }
          </li>

          <li>

          </li>
        </ul>

      </div>
    </nav>
  )
};

export default Header;
