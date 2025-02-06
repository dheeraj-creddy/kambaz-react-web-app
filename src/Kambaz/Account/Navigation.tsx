import { FaSignInAlt, FaUser, FaUserPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
    const location = useLocation();

    return (
        <div id="wd-account-navigation" className="list-group wd fs-5 rounded-0">
            <Link
                to="/Kambaz/Account/Signin"
                id="wd-signin-link"
                className={`list-group-item border-0 ${
                    location.pathname === '/Kambaz/Account/Signin'
                        ? 'active'
                        : 'text-danger'
                }`}
            >
                <FaSignInAlt className="me-2" /> Sign in
            </Link>

            <Link
                to="/Kambaz/Account/Signup"
                id="wd-signup-link"
                className={`list-group-item border-0 ${
                    location.pathname === '/Kambaz/Account/Signup'
                        ? 'active'
                        : 'text-danger'
                }`}
            >
                <FaUserPlus className="me-2" /> Sign up
            </Link>

            <Link
                to="/Kambaz/Account/Profile"
                id="wd-profile-link"
                className={`list-group-item border-0 ${
                    location.pathname === '/Kambaz/Account/Profile'
                        ? 'active'
                        : 'text-danger'
                }`}
            >
                <FaUser className="me-2" /> Profile
            </Link>
        </div>
    );
}
