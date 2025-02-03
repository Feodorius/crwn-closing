import { createContext, useMemo, useState } from "react";


interface CartContextProps {
    isCartOpen: boolean;
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContextProps>({
    isCartOpen: false,
    setIsCartOpen: () => { }
});

export const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const contextValue = useMemo(() => ({
        isCartOpen,
        setIsCartOpen
    }), [
        isCartOpen,
        setIsCartOpen
    ]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};