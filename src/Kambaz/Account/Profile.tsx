import { Form} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <div id="wd-profile-screen" className="w-80">
            <h1 className="mb-4">Profile</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        id="wd-username"
                        defaultValue="alice"
                        readOnly
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        id="wd-email"
                        type="email"
                        defaultValue="alice@wonderland.com"
                        readOnly
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        id="wd-firstname"
                        defaultValue="Alice"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        id="wd-lastname"
                        defaultValue="Wonderland"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        id="wd-dob"
                        type="date"
                        defaultValue="2000-01-01"
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Role</Form.Label>
                    <Form.Select id="wd-role">
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </Form.Select>
                </Form.Group>

                <div className="d-flex justify-content-end">
                    <Link
                        to="/Kambaz/Account/Signin"
                        className="btn btn-danger">
                        Sign Out
                    </Link>
                </div>
            </Form>
        </div>
    );
}
