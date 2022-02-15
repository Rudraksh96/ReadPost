import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { registerUser } from './Actions/postAction';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [namee, setname] = useState('')
    const [maill, setmail] = useState('')
    const [agee, setage] = useState('')
    let uname = namee;
    let umail = maill;
    let uAgee = agee;
    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault()
        console.log(uname,umail,uAgee);
        const data = {
            name: uname,
            email: umail,
            age: uAgee
        }
        
        console.log(data)
         dispatch(registerUser(data));
        navigate('/Showdata');
    }
 
    return (
        <div className="form-body">
            <div className="row">
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <h3>Login </h3>
                            <p>Fill in the data below.</p>
                            <form onSubmit={(e) => handleSubmit(e)}  >
                                <div className="col-md-12">
                                    <input className="form-control" type="text" name="name" placeholder="Name" onChange={(e) => setname(e.target.value)} required />
                                    <div className="valid-feedback">Email field is valid!</div>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <input className="form-control" type="text" name="name" placeholder="Email" onChange={(e) => setmail(e.target.value)}  required />
                                </div>
                                <div className="col-md-12 mt-3">
                                    <input className="form-control" type="text" name="age" placeholder="Age" onChange={(e) => setage(e.target.value)}  required />
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label">I confirm that all data are correct</label>
                                    <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
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

export default Login;
