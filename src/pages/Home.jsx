import {Link, Outlet} from "react-router-dom";

function Home() {
    return (
        <>
            <div className="flex items-center justify-center gap-10 text-xl p-4 bg-purple-400">
                <Link to="/">See Products</Link>
                <Link to="products2">See Products 2</Link>
                <Link to="products3">See Products 3</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Home