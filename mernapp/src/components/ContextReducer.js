import React, { createContext, useContext, useReducer } from 'react'

//import { use } from '../../backend/Routes/CreateUser';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer =(state, action)=>{
 switch(action.type){
    case"Add":
    return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }]
   
    default:
        console.log("Error in Reducer");
}
};

export const CartProvider =({children})=>{

    const[state,dispatch] = useReducer(reducer,[])

    return(
        <CartStateContext.Provider value={state}>
   <CartDispatchContext.Provider vlaue={dispatch}>
     
        {children}
   </CartDispatchContext.Provider>
   </CartStateContext.Provider>
    )
};

export const useCart=() => useContext(CartStateContext);
export const useDispatchCart=() => useContext(CartDispatchContext);
