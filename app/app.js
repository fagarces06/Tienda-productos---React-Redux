
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { info_user } from './actions/AppActions';
import { out_info_user } from './actions/AppActions';
import { Route,Routes } from 'react-router-dom';
/////////COMPONENTES
import Login from './reducer/components/login.jsx';
import Home from './reducer/components/Home.jsx';
import { Cart } from './reducer/components/cart.jsx';
import { Link } from 'react-router-dom';

//1:55:47 MIN
export default function App () {
     // const dispatch= useDispatch();
     // const {email}=useSelector(state=> state.user_reducer);email
      const {TotalCount}=useSelector(state => state.cart_reducer);
      return (
            <div className="container">
            <div className="d-flex py-4">
              <Link className="btn btn-info mx-2" to="/">Login</Link>
              <Link className="btn btn-info mx-2" to="/home">Home</Link>
             
                <Link className="btn btn-primary position-relative" to="/cart">
                  Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {TotalCount}
                    <span className="visually-hidden">products in cart</span>
                  </span>
                </Link>
             
            </div>
            <hr />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
      )
}
/*
<button type="button" class="btn btn-primary" onClick={()=>{
      dispatch(info_user({
            email: "fabio.garces@gmail.com",
            fullname: "Fabio Andres Garces",
            token: "123456",  
      }))

}}>Cambiar Usuario</button>
<button type="button" class="btn btn-primary" onClick={()=>{
      dispatch(out_info_user());

}}>Cerrar Sesion</button>

*/