import {Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx'
import Products from "./pages/Products.jsx";
import Products2 from "./pages/Products2.jsx";
import Products3 from "./pages/Products3.jsx";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route index element={<Products/>}></Route>
                <Route path="products2" element={<Products2/>}></Route>
                <Route path="products3" element={<Products3/>}></Route>
            </Route>
        </Routes>
    )
}

export default App;