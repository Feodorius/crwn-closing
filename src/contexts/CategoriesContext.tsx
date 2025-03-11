import { createContext, useEffect, useMemo, useState } from "react";
import { getCategoriesAndDocuments } from "utils/firebase/firebase.utils";

export interface Product {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesContextProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();

    }, []);

    const value = useMemo(() => ({ categoriesMap }), [categoriesMap]);

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
};