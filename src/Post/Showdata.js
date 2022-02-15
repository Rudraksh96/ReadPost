import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReduxList } from '../Actions/postAction';
import Header from '../Navbar/Header';



const Showdata = () => {
  const dispatch = useDispatch()
  let user = useSelector((state) => state.userModule.userinfo);
  console.log(user, "user List");

  

  useEffect(() => {

    setTimeout(() => {
      dispatch(getReduxList());
    }, 5000);
    
   
    
  }, [])
  if (user && user.length === 0) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-4" >

        <div className="row py-5">
          {user.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card custom-card" style={{ width: "18rem" }}>

                <img
                  src={`https://source.unsplash.com/collection/${item.id}/1600x900`}
                  alt={item.title}
                  className="card-img-top"
                />
                <Link to="/" className="btn btn-danger btn-edit">
                  <span className="material-icons">edit</span>
                </Link>
                <button className="btn btn-danger btn-delete" >
                  <span className="material-icons">delete_outline</span>
                </button>


                <h6 className="card-subtitle mb-2 text-muted">{item.title}</h6>
                <p className="card-text">{item.body}</p>
                <Link to={`/ViewPost/${index + 1}`} className="btn btn-primary " style={{ width: "100%" }}> Read More</Link>
                {/* <Link to={`/UpdatePost/${index + 1}`} className="btn btn-primary " style={{ width: "100%" }}> Update Post</Link>
                <Link to={`/Post/${index}`} className="btn btn-primary " style={{ width: "100%" }}> Delete Post</Link> */}

              </div>


            </div>

          ))}
        </div>
      </div>
    </div>


  )
};

export default Showdata;
