import { Routes, Route, Navigate }
    from "react-router";
import Account from "./Account";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import Dashboard from "./Dashboard";
import Labs from "../Labs";
export default function Kambaz() {
    return (
        <div id="wd-kambaz">
                        <KambazNavigation />
                        <div className="wd-main-content-offset p-3">
                            <Routes>
                                <Route path="/" element={<Navigate to="Account" />} />
                                <Route path="/Account/*" element={<Account />} />
                                <Route path="/Dashboard" element={<Dashboard />} />
                                <Route path="/Courses/:cid/*" element={<Courses />} />
                                // add this to the above path later when we add more courses /:cid/*
                                <Route path="/Calendar" element={<h1>Calendar</h1>} />
                                <Route path="/Inbox" element={<h1>Inbox</h1>} />
                                <Route path="../Labs" element={<Labs />} />
                            </Routes>
                        </div>
        </div>
    );
}

