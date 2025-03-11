import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { Product } from "./CategoriesContext";

export interface CartItem extends Product {
    quantity: number;
}

const addCartItem = (cartItems: CartItem[], productToAdd: Product) => {
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

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: Product) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((item => item.id !== existingCartItem.id));
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};
const clearCartItem = (cartItems: CartItem[], cartItemToRemove: Product) => {
    return cartItems.filter((item => item.id !== cartItemToRemove.id));
}

interface CartContextProps {
    isCartOpen: boolean;
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: CartItem[];
    addItemToCart: (productToAdd: Product) => void;
    removeItemFromCart: (productToAdd: Product) => void;
    clearItemFromCart: (productToAdd: Product) => void;
    cartCount: number;
    cartTotal: number;
}

export const CartContext = createContext<CartContextProps>({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    cartTotal: 0,
});

export const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = useCallback((productToAdd: Product) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }, [cartItems]);

    const removeItemFromCart = useCallback((productToRemove: Product) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }, [cartItems]);

    const clearItemFromCart = useCallback((productToRemove: Product) => {
        setCartItems(clearCartItem(cartItems, productToRemove));
    }, [cartItems]);

    const contextValue = useMemo(() => ({
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal,
    }), [
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal
    ]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};