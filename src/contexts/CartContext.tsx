import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { Product } from "./ProductContext";

export interface CartItem extends Product {
    quantity: number;
}

export const addCartItem = (cartItems: CartItem[], productToAdd: Product) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

interface CartContextProps {
    isCartOpen: boolean;
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: CartItem[];
    addItemToCart: (productToAdd: Product) => void;
    cartCount: number;
}

export const CartContext = createContext<CartContextProps>({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
});

export const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = useCallback((productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }, [cartItems]);

    const contextValue = useMemo(() => ({
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount
    }), [
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount
    ]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};