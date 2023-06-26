
import { INFO_USER } from "../actions/AppActions"
import { OUT_INFO_USER } from "../actions/AppActions"

const default_user_info={
  	email: "",
	fullname: "",
	token: "",  
}


const user_reducer=(state=default_user_info,action)=>{
    switch(action.type){
        case INFO_USER:{
            return{
                email:action.payload.email,
                fullname: action.payload.fullname,
                token: action.payload.token


            }
        }

        case OUT_INFO_USER:{
            return{
                email:"",
                fullname: "",
                token: ""
            }

        }
        default: return state
    }
}



export default user_reducer;