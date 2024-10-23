import React, { createContext, useReducer, useContext } from 'react';

// Create two contexts: one for the cart state, and one for dispatch
const CartStateContext = createContext();
const CartDispatchContext = createContext();

// Define the reducer to handle actions (like ADD, REMOVE)
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            // Logic for adding an item to the cart
            return [...state, {
                id: action.id,
                name: action.name,
                price: action.price,
                qty: action.qty,
                size: action.size,
                img: action.img
            }];
            case "REMOVE":
                let newArr = [...state]
                newArr.splice(action.index, 1)
                return newArr;
        default:
            return state;
    }
};

// Create a provider component that wraps the entire app or relevant parts
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, []); // Initialize state as an empty array

    return (
        // Pass down the cart state and dispatch function to the entire tree
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    );
};

// Custom hooks to use the Cart state and dispatch
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
