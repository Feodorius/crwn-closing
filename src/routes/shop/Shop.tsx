import { useEffect } from "react";
import "./Shop.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "routes/categories-preview/CategoriesPreview";
import Category from "routes/category/Category";
import { getCategoriesAndDocuments } from "utils/firebase/firebase.utils";
import { setCategories } from "store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray));
        };
        getCategoriesMap();

    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
};

export default Shop;