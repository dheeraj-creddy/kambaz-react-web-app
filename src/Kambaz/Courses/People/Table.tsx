import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../Database";

type Enrollment = {
    user: string;
    course: string;
};

export default function PeopleTable() {
    const { cid } = useParams();
    const { users, enrollments } = db;

    const filteredUsers = users.filter((usr) =>
        enrollments.some((enrollment: Enrollment) =>
            enrollment.user === usr._id && enrollment.course === cid
        )
    );

    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Login ID</th>
                    <th>Section</th>
                    <th>Role</th>
                    <th>Last Activity</th>
                    <th>Total Activity</th>
                </tr>
                </thead>
                <tbody>
                {filteredUsers.map((user) => (
                    <tr key={user._id}>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">{user.firstName} </span>
                            <span className="wd-last-name">{user.lastName}</span>
                        </td>
                        <td className="wd-login-id">{user.loginId}</td>
                        <td className="wd-section">{user.section}</td>
                        <td className="wd-role">{user.role}</td>
                        <td className="wd-last-activity">{user.lastActivity}</td>
                        <td className="wd-total-activity">{user.totalActivity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}