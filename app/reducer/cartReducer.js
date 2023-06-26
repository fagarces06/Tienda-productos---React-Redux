
import { ADD_PRODUCT } from "../actions/cartActions"

const default_cart={
  	TotalCount: 0,
	productsList:[]

}




const cart_reducer=(state=default_cart,action)=>{
    switch(action.type){
        case ADD_PRODUCT:{
            return {
                productsList: [...state.productsList, action.payload],
                TotalCount: state.TotalCount + 1

            }
      }


        default: return state
    }
}




export default cart_reducer;