import { memo } from "react";
import "./CategoryPreview.scss";
import ProductCard from "components/ProductCard/ProductCard";
import { Link } from "react-router-dom";


const CategoryPreview = ({ title, products }) => {

    return (
        <div className="category-preview-container">
            <h2 >
                <Link className="title" to={title}>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className="preview">
                {products
                    .filter((_, index) => index < 4)
                    .map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))
                }
            </div>
        </div>
    );
};

export default memo(CategoryPreview);