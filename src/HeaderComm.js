import React from 'react'
import { Link } from 'react-router-dom';

const HeaderComm = () => {
  return (
    <nav className="navbar navbar-expand-sm  navbar-dark navbar-fixed">
      <div className="container-fluid">

        <Link to="/" >
          <button className='btn btn-primary' style={{ fontWeight: "bold", fontSize: "18px" }}>Redux Posts</button>
        </Link>

        <ul className="navbar-nav">

          <Link to="/Addpost" >
            <button className='btn btn-primary' style={{ fontWeight: "bold", fontSize: "18px" }}>Add Posts</button>
          </Link>

         

          <li>

          </li>
        </ul>

      </div>
    </nav>
  )
}

export default HeaderComm