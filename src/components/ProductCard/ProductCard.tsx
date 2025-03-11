import CustomButton from "components/CustomButton/CustomButton";
import "./ProductCard.scss";
import { BUTTON_TYPE_CLASSES } from "../../constants";
import { Product } from "contexts/CategoriesContext";
import { useContext } from "react";
import { CartContext } from "contexts/CartContext";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { imageUrl, name, price } = product;
    const { addItemToCart } = useContext(CartContext);


    const addProductToCart = () => addItemToCart(product);

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton
                onClick={addProductToCart}
                buttonType={BUTTON_TYPE_CLASSES.inverted}>
                Add to card
            </CustomButton>
        </div>
    );
};

export default ProductCard;