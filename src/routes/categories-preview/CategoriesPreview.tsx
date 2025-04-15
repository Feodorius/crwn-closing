import CategoryPreview from "components/CategoryPreview/CategoryPreview";
import Spinner from "components/Spinner/Spinner";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectIsCategoriesLoading } from "store/categories/category.selector";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesLoading);

    return (
        <>
            {isLoading ? <Spinner /> : (
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return <CategoryPreview products={products} title={title} key={title} />
                })
            )}
        </>
    )
};

export default memo(CategoriesPreview);