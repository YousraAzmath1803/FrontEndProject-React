import './Navbar.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Container/Home';
import Login from '../Container/Login';
import Register from '../Container/Register';
import Product from '../Container/Product';
import AdminDashboard from '../Container/AdminDashboard';
import CustomerDashboard from '../Container/CustomerDashboard';
import { useSelector } from 'react-redux';
import ProductView from '../Container/ProductView';
import Cart from '../Container/Cart';
function Navbar() {
    var appState = useSelector(appState => appState);
    var role;
    var isLoggedIn;
    if (appState.isUserLoggedIn.value !== "notLoggedIn") {
        appState.isUserLoggedIn.then(data => {
            console.log("data", data);
            if (data.value == "loggedIn") {
                isLoggedIn = true;
                role = data.role;
                console.log("I am inside this");
            }
        })
    }
    else {
        isLoggedIn = false;
    }
    console.log("Navbar appState", appState);
    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">E-Commerce React</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/product">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">Cart</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/cart" element={<Cart></Cart>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/product" element={<Product></Product>}></Route>
                    <Route path="/admin" element={<Product></Product>}></Route>
                    <Route path="/customer" element={<CustomerDashboard></CustomerDashboard>}></Route>
                    <Route path="/product-view" element={<ProductView></ProductView>}></Route>
                </Routes>
            </Router>
        </>
    )
}
export default Navbar;