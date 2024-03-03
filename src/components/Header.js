import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
    const [loginButton, setLoginButton] = useState("Login");

    // Subscribing to the store using Selector
    const cart = useSelector((store) => store.cart.items);

    return <div className = "header shadow-md items-center mb-2"> {/* Greater then sm(Small device) */}
                <div className="flex justify-between items-center mx-[140px]">
                    <Link to={"/"}>
                        <img className="w-auto h-[80px]" src="https://static.vecteezy.com/system/resources/thumbnails/007/500/121/small_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg" />
                    </Link>
                    <div className="nav-items items-center">
                        <ul className="flex">
                            <li className="pr-4"><Link to={"/"}>Home</Link></li>
                            <li className="px-4"><Link to={"/about"}>About</Link></li>
                            <li className="px-4"><Link to={"/contact"}>Contact us</Link></li>
                            <li className="px-4"><Link to={"/groceries"}>Groceries</Link></li>
                            <li className="px-4"><Link to={"/cart"}>Cart({cart.length})</Link></li>
                            <button className="login-button w-20 mx-2 bg-green-100 rounded-lg" onClick={() => loginButton === "Login" ? setLoginButton("Logout") : setLoginButton("Login")}>
                                {loginButton}
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
};

export default Header;