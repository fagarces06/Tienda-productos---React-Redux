
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector, useDispatch } from 'react-redux';
import cart_reducer from '../cartReducer';
import { add_product } from '../../actions/cartActions';
import { remove_product } from '../../actions/cartActions';
export const ProductsList = (props) => {
  const {products}= props;
 
  const dispatch = useDispatch();

  const { productsList } = useSelector(state => state.cart_reducer);
  
  const handleAddOrRemoveProduct = (productId) => {
    const product = products.find(product => product.id === productId);
    console.log("elemento que se va a agregar o eleiminar",product);
    //dispatch(add_product(product))
    
    
    if (productsList.find(pdt => pdt.id === productId)) {
      const id_int=parseInt(productId);
      console.log("el tipo de var es:",typeof(id_int));
      console.log("ingreso al dispacth de remove",productId,typeof(id_int));
      
      
      dispatch(remove_product(id_int));
    } else {
      console.log("ingreso al dispacth de add");
      dispatch(add_product(product));
    }
    
  }

  return (
    <>
      <h2>Listado de productos</h2>
      <div className="row">
        
        {
          products.map(product => {
            return (
              <div key={product.id} className="col-3 mt-3">
                <h4>{product.name}</h4>
                <p><b>Price:</b> {product.price}</p>
                <p><b>Category:</b> {product.category}</p>
                
                <button
                  className={`btn ${productsList.find(pdt => pdt.id === product.id) ? "btn-danger" : "btn-success"}`} //para colocar en verde al agregar y rojo al quitar producto
                  onClick={() => handleAddOrRemoveProduct(product.id)}
                >
                  {productsList.find(pdt => pdt.id === product.id) ? "Remove" : "Add"} to Cart
                </button>
            
              </div>
            )
          })
        }
        
      </div>
    </>
  )
}