import { Link } from "react-router-dom";
import {Button, Card, Col, Row} from "react-bootstrap";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (6)</h2>
            <hr/>
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                  className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/react.png" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Full Stack software
                                        developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                  className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/cpp.png" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1235 C++</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Learn programming with C++</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                  className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/java.png" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1236 Java</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Learn programming with Java</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                  className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/python.png" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1237 Python</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Learn Python Programming</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                  className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/r.png" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1238 R </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Learn programming with R</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                  className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/tensorflow.png" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1239 TensorFlow</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Deep Learning with TF</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{width: "300px"}}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                  className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/pytorch.png" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1240 PyTorch</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Deep Learning with PyTorch</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>


    );
}

