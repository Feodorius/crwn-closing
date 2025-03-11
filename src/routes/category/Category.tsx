import { memo, useContext, useEffect, useState } from "react";
import "./category.scss";
import { useParams } from "react-router-dom";
import { CategoriesContext, Product } from "contexts/CategoriesContext";
import ProductCard from "components/ProductCard/ProductCard";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (Object.hasOwn(categoriesMap, category)) {
            setProducts(categoriesMap[category]);
        }
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {
                    products.length ? products.map((product: Product) => (
                        <ProductCard product={product} key={product.id} />
                    )) : null
                }
            </div>
        </>
    );
};

export default memo(Category);