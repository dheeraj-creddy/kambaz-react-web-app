// src/Kambaz/Courses/Assignments/index.tsx
import { Button, Form, ListGroup } from "react-bootstrap";
import {FaCaretDown, FaPlus} from "react-icons/fa";
import {BsGripVertical, BsSearch} from "react-icons/bs";
//import { Link } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons.tsx";
import {MdAssignmentAdd} from "react-icons/md";
import {IoEllipsisVertical} from "react-icons/io5";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="position-relative w-25">
                    <Form.Control
                        type="text"
                        placeholder="Search for Assignment"
                        className="ps-5"
                    />
                    <BsSearch className="position-absolute top-50 translate-middle-y ms-3"/>
                </div>
                <div>
                    <Button variant="secondary" className="me-2">
                        <FaPlus className="me-2"/>
                        Group
                    </Button>
                    <Button variant="danger">
                        <FaPlus className="me-2"/>
                        Assignment
                    </Button>
                </div>
            </div>


            <div className="d-flex justify-content-between align-items-center assignment-header px-3 py-2">
                <div className="d-flex align-items-center wide-rectangle">
                    <BsGripVertical className="me-2 fs-5"/>
                    <FaCaretDown className="me-2 fs-5"/>
                    <h6 className="mb-0 fw-bold">ASSIGNMENTS</h6>
                </div>
                <div className="d-flex align-items-center">
                    <span className="elliptical-outline me-2">
                        40% of Total
                    </span>
                    <FaPlus style={{marginRight: '5px', marginLeft: "5px"}}/>
                    <IoEllipsisVertical className="fs-4"/>
                </div>
            </div>
            {/* Add more assignments following the same pattern */}
            <ListGroup className="rounded-0 border-success border-3 border-start px-3 py-2">
                <ListGroup.Item className="wd-assignment-list-item d-flex align-items-center mt-3">
                    <div className="assignment-icons d-flex align-items-center me-2">
                        <BsGripVertical className="me-2 fs-5 spacing"/>
                        <MdAssignmentAdd className="text-success fs-5 spacing"/>

                    </div>

                    <div className="assignment-content text-start flex-grow-1">
                        <h3 className="assignment-title mb-0">
                            <a href="#/Kambaz/Courses/1234/Assignments/123"
                               style={{textDecoration: 'none', color: 'inherit'}}>
                                A1 - ENV + HTML
                            </a>
                        </h3>
                        <div className="assignment-details">
                            <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6
                            at 12:00am |
                            <br/>
                            <b>Due</b> May 13 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <div className="d-flex">
                        <LessonControlButtons/>
                    </div>

                </ListGroup.Item>

                <ListGroup.Item className="wd-assignment-list-item d-flex align-items-center mt-3">
                    <div className="assignment-icons d-flex align-items-center me-2 ">
                        <BsGripVertical className="me-2 fs-5 spacing"/>
                        <MdAssignmentAdd className="text-success fs-5 spacing"/>
                    </div>
                    <div className="assignment-content text-start flex-grow-1">
                        <h3 className="assignment-title mb-0">
                            <a href="#/Kambaz/Courses/1234/Assignments/123"
                               style={{textDecoration: 'none', color: 'inherit'}}>
                                A2 - CSS + BOOTSTRAP
                            </a>
                        </h3>

                        <div className="assignment-details">
                            <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May
                            13 at 12:00am |
                            <br/>
                            <b>Due</b> May 20 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <div className="d-flex">
                        <LessonControlButtons/>
                    </div>
                </ListGroup.Item>

                <ListGroup.Item className="wd-assignment-list-item d-flex align-items-center mt-3">
                    <div className="assignment-icons d-flex align-items-center me-2">
                        <BsGripVertical className="me-2 fs-5 spacing"/>
                        <MdAssignmentAdd className="text-success fs-5 spacing"/>
                    </div>
                    <div className="assignment-content text-start flex-grow-1">
                        <h3 className="assignment-title mb-0">
                            <a href="#/Kambaz/Courses/1234/Assignments/123"
                               style={{textDecoration: 'none', color: 'inherit'}}>
                                A3 - JAVASCRIPT + REACT
                            </a>
                        </h3>
                        <div className="assignment-details">
                            <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May
                            20 at 12:00am |
                            <br/>
                            <b>Due</b> May 27 at 11:59pm | 100 pts
                        </div>
                    </div>
                    <div className="d-flex">
                        <LessonControlButtons/>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
        ;
}
