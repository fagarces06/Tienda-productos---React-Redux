export const INFO_USER= 'INFO_USER';
export const OUT_INFO_USER= 'OUT_INFO_USER'

export const info_user=(user)=>{
    return{
        type: INFO_USER,
        payload: {
            email: user.email, 
            fullname: user.fullname,
            token: user.token            
        }
    }

}

export const out_info_user=(user)=>{
    return{
        type: OUT_INFO_USER,  // no tiene payload porque no es necesario ya que es resetiar los varloes a string ""

    }

}



