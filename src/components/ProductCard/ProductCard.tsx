import CustomButton from "components/CustomButton/CustomButton";
import "./ProductCard.scss";
import { BUTTON_TYPE_CLASSES } from "../../constants";
import { Product } from "contexts/ProductContext";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { imageUrl, name, price } = product;

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton buttonType={BUTTON_TYPE_CLASSES.inverted}>
                Add to card
            </CustomButton>
        </div>
    );
};

export default ProductCard;