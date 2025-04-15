import { memo, useEffect, useState } from "react";
import "./category.scss";
import { useParams } from "react-router-dom";
import ProductCard from "components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectIsCategoriesLoading } from "store/categories/category.selector";
import { Product } from "utils/types";
import Spinner from "components/Spinner/Spinner";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        if (Object.hasOwn(categoriesMap, category)) {
            setProducts(categoriesMap[category]);
        }
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            {isLoading ? <Spinner /> : (
                <div className="category-container">
                    {
                        products ? products.map((product: Product) => (
                            <ProductCard product={product} key={product.id} />
                        )) : null
                    }
                </div>
            )}
        </>
    );
};

export default memo(Category);