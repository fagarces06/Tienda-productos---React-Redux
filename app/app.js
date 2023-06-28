
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


//1:55:47 MIN
export default function App () {
     // const dispatch= useDispatch();
     // const {email}=useSelector(state=> state.user_reducer);email
 
      return (
            <div>
                  
                  
                  
                  <Routes>
                        <Route path='/' element={<Login></Login> }></Route>      
                        <Route path='/home' element={<Home></Home> }></Route>    
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