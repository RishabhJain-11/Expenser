import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { fetchData } from '../helpers'


// Loader
export function mainLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {
    const { userName } = useLoaderData();

    return (
        <div>
            <h1>{userName}</h1>
            <Outlet />
        </div>
    )
}

export default Dashboard;