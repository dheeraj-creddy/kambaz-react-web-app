export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            {/* Assignment Name */}
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

            {/* Description */}
            <label htmlFor="wd-description">Description</label>
            <textarea id="wd-description" rows={5} cols={50}>
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following:
        - Your full name and section
        - Links to each of the lab assignments
        - Link to the Kanbas application
        - Links to all relevant source code repositories
        The Kanbas application should include a link to navigate back to the
        landing page.
      </textarea>
            <br /><br />

            {/* Table for Points, Assignment Group, Display Grade, Submission Type */}
            <table>
                <tbody>
                {/* Points */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" type="number" value={100} />
                    </td>
                </tr>

                {/* Assignment Group */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            {/* Add more groups here */}
                        </select>
                    </td>
                </tr>

                {/* Display Grade As */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                            <option value="Complete/Incomplete">Complete/Incomplete</option>
                            {/* Add more options if needed */}
                        </select>
                    </td>
                </tr>

                {/* Submission Type */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                            <option value="On Paper">On Paper</option>
                            <option value="No Submission">No Submission</option>
                        </select>
                    </td>
                </tr>

                {/* Online Entry Options */}
                <tr>
                    <td align="right" valign="top">
                        <label>Online Entry Options</label>
                    </td>
                    <td>
                        <div>
                            <label>
                                <input id="wd-text-entry" type="checkbox" />
                                Text Entry
                            </label><br />
                            <label>
                                <input id="wd-website-url" type="checkbox" />
                                Website URL
                            </label><br />
                            <label>
                                <input id="wd-media-recordings" type="checkbox" />
                                Media Recordings
                            </label><br />
                            <label>
                                <input id="wd-student-annotation" type="checkbox" />
                                Student Annotation
                            </label><br />
                            <label>
                                <input id="wd-file-upload" type="checkbox" />
                                File Uploads
                            </label>
                        </div>
                    </td>
                </tr>

                {/* Assign To */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign To</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr>

                {/* Due Date */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due Date</label>
                    </td>
                    <td>
                        <input id="wd-due-date" type="date" value="2024-05-13" />
                    </td>
                </tr>

                {/* Available From */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available From</label>
                    </td>
                    <td>
                        <input id="wd-available-from" type="date" value="2024-05-06" />
                    </td>
                </tr>

                {/* Available Until */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-until">Available Until</label>
                    </td>
                    <td>
                        <input id="wd-available-until" type="date" value="2024-05-20" />
                    </td>
                </tr>
                </tbody>
            </table>
            <br />
            <button>Save</button>
            <button>Cancel</button>
        </div>
    );
}
