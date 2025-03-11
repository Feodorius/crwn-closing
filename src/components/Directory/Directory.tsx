import DirectoryItem from "components/DirectoryItem/DirectoryItem";
import "./Directory.scss";
import { categories } from "../../constants";

const Directory = () => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <DirectoryItem {...category} key={category.id} />
            ))}
        </div>
    );
};


export default Directory;