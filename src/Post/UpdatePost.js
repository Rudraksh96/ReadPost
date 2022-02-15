import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost, updatePost } from '../Actions/postAction';


const UpdatePost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();
     let user  ={}
     user = useSelector((state) => state.userModule.postinfo);
   console.log(user, "user Listtttttt");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        loadPost();
      }, []);
      useEffect(() => {
        debugger;
        if (user) {
          setTitle(user.title);
          setBody(user.body);
        }
      }, [user]);
      const loadPost = () => {
        dispatch(getPost(id));
      };

    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault()
        console.log(title,body);
        const update_post = {
            id: user.id,
            title: title,
            body: body,
          };
          dispatch(updatePost(update_post));
          navigate('/');
         
        
    }

    return (
      <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Update Post </h3>
              <form onSubmit={(e) => handleSubmit(e)}  >
            
                
                <div className="col-md-12">
                  <input className="form-control" type="text" value ={title} name="name" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
                 
                </div>

                <div className="col-md-12">
                  <input className="form-control" type="text" name="id" value ={body} placeholder="body" onChange={(e) => setBody(e.target.value)} required />
                
                </div>
                
                <div className="form-button mt-3">
                  <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};
export default UpdatePost