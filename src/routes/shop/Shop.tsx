import { memo, useEffect } from "react";
import "./Shop.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "routes/categories-preview/CategoriesPreview";
import Category from "routes/category/Category";
import { fetchCategoriesStart } from "store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
};

export default memo(Shop);