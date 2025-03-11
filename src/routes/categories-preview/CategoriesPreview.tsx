import CategoryPreview from "components/CategoryPreview/CategoryPreview";
import { CategoriesContext } from "contexts/CategoriesContext";
import { memo, useContext } from "react";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

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