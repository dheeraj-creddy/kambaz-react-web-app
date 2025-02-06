import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {BsPlus} from "react-icons/bs";
export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <BsPlus style={{ marginRight: '5px', marginLeft: "5px" }} />
            <IoEllipsisVertical className="fs-4" />
        </div> );}

