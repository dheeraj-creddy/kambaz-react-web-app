import { Form} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen" className="w-70">
            <h1 className="mb-4">Sign in</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control
                        id="wd-username"
                        type="text"
                        placeholder="username"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        id="wd-password"
                        type="password"
                        placeholder="password"
                    />
                </Form.Group>

                <Link
                    id="wd-signin-btn"
                    to="/Kambaz/Account/Profile"
                    className="btn btn-danger w-100 mb-3">
                    Sign in
                </Link>

                <div className="text-center">
                    <Link
                        id="wd-signup-link"
                        to="/Kambaz/Account/Signup"
                        className="text-decoration-none text-danger">
                        Sign up
                    </Link>
                </div>
            </Form>
        </div>
    );
}
