import CustomButton from "components/CustomButton/CustomButton";
import "./ProductCard.scss";
import { BUTTON_TYPE_CLASSES } from "../../constants";
import { Product } from "utils/types";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "store/cart/cart.selector";
import { addItemToCart } from "store/cart/cart.action";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { imageUrl, name, price } = product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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