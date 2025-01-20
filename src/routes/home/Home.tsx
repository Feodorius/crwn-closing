import Directory from "components/Directory/Directory";
import { categories } from "constants";
import { Outlet } from "react-router";


const Home = () => {
    return (
        <div>
            <Outlet />
            <Directory categories={categories} />

        </div>
    )
};

export default Home;