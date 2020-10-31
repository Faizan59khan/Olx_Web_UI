const INITIAL_STATE={  //this is a global state
  
users: "https://apollo-singapore.akamaized.net/v1/files/jazfjo6dr3se-PK/image;s=1080x1080",

}



 export default (state =INITIAL_STATE,action) =>{
  
     //console.log("action ==>",action)

     switch (action.type){    
        case "SETDATA":
            return({
               
                ...state,
                //users : [...state.users,action.data] ,  //...state.user present data + action.data(new data)
           
              users: action.data,
            })   
        }
        return state;
        
   
 }