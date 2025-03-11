import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { DirectoryItemContainer, DirectoryItemBody, BackgroundImage } from "./directory-item.styled"

const shopNowString = "Shop Now";

const DirectoryItem = ({ title, imageUrl, route }) => {
    const navigate = useNavigate();
    const onNavigate = () => navigate(route);
    return (
        <DirectoryItemContainer onClick={onNavigate} >
            <BackgroundImage imageUrl={imageUrl} />
            <DirectoryItemBody>
                <h2>{title}</h2>
                <p>{shopNowString}</p>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    );
};

export default memo(DirectoryItem);