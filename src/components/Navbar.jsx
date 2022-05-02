import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
            {/* all the links in navbar, IMPORTANT: Link should match as mentioned
            in problem statement */}

            <div>
                <Link to="/home">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Link to="/products">Products</Link>
            </div>
            <div>
                <Link to="/products/men">Men</Link>
            </div>
            <div>
                <Link to="/products/Women">Women</Link>
            </div>
            <div>
                <Link to="/products/kids">Kids</Link>
            </div>
            <div>
                <Link to="/products/homedecor">Home decor</Link>
            </div>
        </nav>
    );
};
