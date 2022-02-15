import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../Actions/postAction';




const Addpost = () => {
  let navigate = useNavigate();
 const [ttle, settitle] = useState('');
  const [bdy, setbody] = useState("");
  // const[iid,setid]=useState("");
  let utitle = ttle ;
  let ubody = bdy;
  // let uid = iid;

  const dispatch = useDispatch()


  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault()
    console.log( utitle, ubody);
    const data = {
      // id : uid,
      title:utitle,
      body:ubody
  }
  console.log(data)
  dispatch(createPost(data));

  navigate("/ReadPost")
  }
  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Add Post </h3>
              <form onSubmit={(e) => handleSubmit(e)} className="requires-validation" >
              {/* <div className="col-md-12">
                  <input className="form-control" type="text" name="name" placeholder="ID" onChange={(e) => setid(e.target.value)} required />
                  <div className="invalid-feedback">id cannot be blank!</div>
                </div> */}
                
                <div className="col-md-12">
                  <input className="form-control" type="text" name="name" placeholder="Title" onChange={(e) => settitle(e.target.value)} required />
                  <div className="invalid-feedback">Title cannot be blank!</div>
                </div>

                <div className="col-md-12">
                  <input className="form-control" type="text" name="id" placeholder="body" onChange={(e) => setbody(e.target.value)} required />
                  <div className="invalid-feedback">Body cannot be blank!</div>
                </div>
                <div className="form-check">
                  <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                </div>
                <div className="form-button mt-3">
                  <button id="submit" type="submit" className="btn btn-primary">submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Addpost;
