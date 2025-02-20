import CoursesNavigation from "./Navigation";
import { courses } from "../Database";
import { Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";

export default function Courses() {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();

    const pathSegments = pathname.split("/");
    const currentSegment = pathSegments[pathSegments.length - 1] || "Home";

    const sanitizedSegment = currentSegment.replace(/%60/g, "").replace(/[^\w\s]/g, "");

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course ? course.name : "Course Not Found"} &gt; {sanitizedSegment.charAt(0).toUpperCase() + sanitizedSegment.slice(1)}
            </h2>
            <hr />

            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}