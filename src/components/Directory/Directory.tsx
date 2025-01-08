import CategoryItem from "components/CategoryItem/CategoryItem";
import "./Directory.scss";

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem {...category} key={category.id} />
            ))}
        </div>
    );
};


export default Directory;