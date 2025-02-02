import { createContext, useMemo, useState } from "react";
import PRODUCTS from "../shop-data.json";

export interface Product {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

export const ProductContext = createContext({
    products: [],
});

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState<Product[]>(PRODUCTS);

    const value = useMemo(() => ({ products }), [products]);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
};