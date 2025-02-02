import ProductCard from "components/ProductCard/ProductCard";
import { ProductContext } from "contexts/ProductContext";
import { useContext } from "react";
import "./Shop.scss";

const Shop = () => {
    const { products } = useContext(ProductContext);

    return (
        <div className="products-container">
            {products.map(({ id, ...otherProps }) => (
                <ProductCard key={id} product={otherProps} />
            ))}
        </div>
    )
};

export default Shop;