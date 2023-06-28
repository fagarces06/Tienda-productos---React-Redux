
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { out_info_user } from '../../actions/AppActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProductsList } from './ProductList.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

//1:48:00 MIN
export default function Home () {
     // const dispatch= useDispatch();
     const [products,setProducts]= useState([]);
     useEffect(() => {
      axios.get("http://localhost:3000/productos").then((response) => {
        setProducts(response.data);
      });
    }, []);
     console.log("la lista de productos son:",products);

      const user=useSelector(state=> state.user_reducer);
      const navigate=useNavigate(); //en la variable user obtengo el objeto del reducer usuario el cual tiene las propiedad nombre, email, password..etc
     // console.log("los datos del usuario ingresado son:",user);
      const dispatch=useDispatch();
      const login_out=()=>{
        dispatch(out_info_user());
        navigate("/");
      }
 
      return (
            <div>
                  
                  <h1>Home</h1>  
                  <p>Welcome {user.fullname}</p>
                  <button className='btn btn-primary' onClick={login_out}>Cerrar Sesión</button>
                  <hr></hr>
                  <ProductsList products={products}></ProductsList>

            </div>
      )
}