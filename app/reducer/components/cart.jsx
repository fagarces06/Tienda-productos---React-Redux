import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { remove_product } from '../../actions/cartActions';

export const Cart = () => {
  const dispatch = useDispatch();
  const { productsList } = useSelector(state => state.cart_reducer);

  const handleRemoveProduct = (productId) => dispatch(remove_product(productId));

  return (
    <>
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map(product => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td scope="row">{product.name}</td>
                <td scope="row">{product.price}</td>
                <td scope="row">{product.category}</td>
                <td scope="row"><button className="btn btn-danger" onClick={() => handleRemoveProduct(product.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}