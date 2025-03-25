import CategoryPreview from "components/CategoryPreview/CategoryPreview";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "store/categories/category.selector";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategoryPreview products={products} title={title} key={title} />
            })}
        </>
    )
};

export default memo(CategoriesPreview);