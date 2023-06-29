
import { ADD_PRODUCT } from "../actions/cartActions"
import { REMOVE_PRODUCT } from "../actions/cartActions"
const default_cart={
  	TotalCount: 0,
	productsList:[],

}




const cart_reducer=(state=default_cart,action)=>{



    switch(action.type){
        case ADD_PRODUCT:{
            return {
                productsList: [...state.productsList, action.payload],
                TotalCount: state.TotalCount + 1

            }
      }
      case REMOVE_PRODUCT:{
        const productId= action.payload;
        const productsList_state=state.productsList
        const new_productlist=productsList_state.filter(i=>i.id!==productId);
        console.log("lista filtrada",new_productlist);
        return {
           
            TotalCount: state.TotalCount - 1,
            
            productsList: new_productlist
           
        }
  }

        default: return state
    }
}




export default cart_reducer;