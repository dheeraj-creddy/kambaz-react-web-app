import { Button, ListGroup, Modal } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNewspaper } from "react-icons/lu";
import { IoCaretDown } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import AssignmentsControls from "./AssignmentsControl";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment, setAssignments } from "./reducer";
import * as assignmentClient from "./Client";
import { useState, useEffect } from "react";

export default function Assignments() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const isFaculty = currentUser?.role === "FACULTY";  // Adding the isFaculty check

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);

  const fetchAssignments = async () => {
    if (!cid) return;
    const fetchedAssignments = await assignmentClient.findAssignmentsForCourse(cid);
    dispatch(setAssignments(fetchedAssignments));
  };

  const handleDelete = (assignment: any) => {
    setSelectedAssignment(assignment);
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (selectedAssignment) {
      await assignmentClient.deleteAssignment(selectedAssignment._id);
      dispatch(deleteAssignment(selectedAssignment._id));
    }
    setShowDeleteDialog(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false);
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  return (
    <div>
      <AssignmentsControls />
      <br /><br /><br /><br />

      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" /> <IoCaretDown /> ASSIGNMENTS
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ListGroup.Item key={assignment._id} className="wd-module p-0 mb-0 fs-6">
              <ListGroup className="wd-lessons rounded-0 mb-0">
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center mb-0">
                  <BsGripVertical className="me-2 fs-3" /> <LuNewspaper className="me-2 fs-3" color="green" />
                  <div className="wd-assignment-text ms-2">
                    {/* Conditionally render the assignment title */}
                    {isFaculty ? (
                      <Link
                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}  // Fixed template string syntax
                        className="wd-assignment-link d-block"
                      >
                        {assignment.title}
                      </Link>
                    ) : (
                      <strong>{assignment.title}</strong>  // Display title as plain text for students
                    )}
                    <span className="d-block">
                      <span style={{ color: '#DC3545' }}>Multiple Modules</span> | <b>Available From </b> {assignment.available} | <b>Available Until </b> {assignment.until} 
                    </span>
                    <span className="d-block"> <b>Due </b> {assignment.due} | {assignment.points}pts</span>
                  </div>
                  {/* Conditionally render the trash icon only for faculty */}
                  {isFaculty && (
                    <FaTrash
                      className="text-danger me-2 mb-1"
                      cursor={"pointer"}
                      onClick={() => handleDelete(assignment)}
                    />
                  )}
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          ))}
      </ListGroup>

      <Modal show={showDeleteDialog} onHide={handleDeleteCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete{" "}
          <strong>{selectedAssignment?.title}</strong>? This action cannot be
          undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
