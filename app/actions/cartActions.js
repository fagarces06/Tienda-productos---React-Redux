export const ADD_PRODUCT= 'ADD_PRODUCT';
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const add_product=(product)=>{
    return{
        type: ADD_PRODUCT,
        payload: product
    }

}
export const remove_product=(id)=>{
    console.log("ahora el tipo de var es::",id)
    return{
        type: REMOVE_PRODUCT,
        payload: id
    }

}



