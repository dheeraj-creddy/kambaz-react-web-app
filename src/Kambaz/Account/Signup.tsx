import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div id="wd-signup-screen" className="w-70">
            <h1 className="mb-4">Sign up</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control
                        id="wd-email"
                        type="email"
                        placeholder="Email"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        id="wd-username"
                        placeholder="Username"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        id="wd-first-name"
                        placeholder="First Name"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        id="wd-last-name"
                        placeholder="Last Name"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        id="wd-password"
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Control
                        id="wd-verify-password"
                        type="password"
                        placeholder="Verify Password"
                    />
                </Form.Group>

                <Link
                    id="wd-signup-btn"
                    to="/Kambaz/Account/Profile"
                    className="btn btn-danger w-100 mb-3">
                    Sign up
                </Link>

                <div className="text-center">
                    <Link
                        id="wd-signin-link"
                        to="/Kambaz/Account/Signin"
                        className="text-decoration-none text-danger">
                        Sign in
                    </Link>
                </div>
            </Form>
        </div>
    );
}
