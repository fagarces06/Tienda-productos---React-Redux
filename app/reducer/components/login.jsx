import React from "react";
import ReactDOM from 'react-dom/client';
import Axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { info_user } from "../../actions/AppActions";
import { useNavigate } from "react-router-dom";
const Login=()=>{
  const emailField = useRef(null);
  const passwordField = useRef(null);
  const navigate=useNavigate();
  const dispatch= useDispatch();
  const handleSubmit = e => {
 //   console.log("datos del emailfield:",emailField);
 //   console.log("datos del passwordField",passwordField);
    e.preventDefault();
    Axios.get("http://localhost:3000/user")
      .then(response => {
        const users = response.data;
      //  console.log("esta es la data:",users);
        const userToLog = users.find(user => user.email === emailField.current.value);
        console.log()
        console.log("userToleg es igual a:",userToLog.password);
        if (userToLog) {
          console.log("ingreso por el usuario:",userToLog.password);
          
          if (userToLog.password === passwordField.current.value) {
            console.log("ingreso por password:");
            console.log("Credenciales válidas");
            dispatch(info_user({
              email: userToLog.email,
              fullname: `${userToLog.first_name} ${userToLog.last_name}`,
              token: Date.now(),
            }))
            navigate("/home");
          }
          
        }
      })
  }


  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <h2 className="mb-4">LOGIN FORM</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" ref={emailField} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" ref={passwordField} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}



export default Login;
/*
<div className="row justify-content-center">
<div className="col-6">
<h2 className="mb-4">LOGIN FORM</h2>
<form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" ref={emailField} />
    </div>
    <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" ref={passwordField} />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>

*/