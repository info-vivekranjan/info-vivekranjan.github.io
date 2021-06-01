import React, { createContext, useState } from 'react';


const CartContext = createContext();

function CartContextProvider({ children }) {

    const [cart, setCart] = useState([])
    const [itemCount, setItemCount] = useState({})
    const [isAuth, setIsAuth] = useState(false);

    const [token, setToken] = useState("");

    const [lh, setLh] = useState(true);


    const handleCart = (payload) => {
        setCart([...cart, payload])
    }



    const increaseCount = (id) => {
        const obj = {
            ...itemCount,
            [id]: itemCount[id] + 1 || 2
        }
        setItemCount(obj)
    }

    const decreaseCount = (id) => {
        const obj = {
            ...itemCount,
            [id]: itemCount[id] - 1 || 0
        }
        setItemCount(obj)
    }


    const handleLogin = (token) => {
        setIsAuth(true);
        setToken(token);
    }

    const value = {
        cart,
        handleCart,
        increaseCount,
        decreaseCount,
        itemCount,
        isAuth,
        setIsAuth,
        handleLogin,
        lh,
        setLh,
        setCart

    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
export { CartContextProvider, CartContext }