import React from "react";
import ReactDOM from 'react-dom/client';
const Login=()=>{
  const varunidades=useSelector((state)=> state.game_shop.pokemon);
    return (
        <div>LOGIN</div>
  
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