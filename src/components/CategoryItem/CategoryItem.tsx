import { memo } from "react";
import "./CategoryItem.scss";

const shopNowString = "Shop Now";

const CategoryItem = ({ title, imageUrl }) => {
    return (
        <div className="category-container">
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>{shopNowString}</p>
            </div>
        </div>
    );
};

export default memo(CategoryItem);