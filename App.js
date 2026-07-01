import './App.css';

function updateAttendance() {
    let value = document.getElementById("attendanceInput").value;

    if (value < 0 || value > 100) {
        alert("Enter a value between 0 and 100");
        return;
    }

    let bar = document.getElementById("attendanceBar");

    bar.style.width = value + "%";
    bar.innerHTML = value + "%";

    if (value >= 75) {
        bar.style.backgroundColor = "green";
    } else if (value >= 50) {
        bar.style.backgroundColor = "orange";
    } else {
        bar.style.backgroundColor = "red";
    }
}

function addAssignment() {
  let name = document.getElementById("assignmentName").value;
  let date = document.getElementById("assignmentDate").value;

  if (!name || !date) {
    alert("Enter assignment name and date");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = name + " - " + date;

  document.getElementById("assignmentList").appendChild(li);

  document.getElementById("assignmentName").value = "";
  document.getElementById("assignmentDate").value = "";
}

function addAchievement() {
  let achievement =
    document.getElementById("achievementInput").value;

  if (!achievement) {
    alert("Enter achievement");
    return;
  }

  let p = document.createElement("p");
  p.innerHTML = "🏆 " + achievement;

  document.getElementById("achievementSection")
    .appendChild(p);

  document.getElementById("achievementInput").value = "";
}

function addAnnouncement() {
  let text =
    document.getElementById("announcementInput").value;

  if (!text) {
    alert("Enter announcement");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = text;

  document.getElementById("announcementList")
    .appendChild(li);

  document.getElementById("announcementInput").value = "";
}

function App() {
  return (
    <div className="dashboard">
      <div className="header">
        <div className="profile">
          <div className="avatar"></div>
          <div>
            <h2>Trisha</h2>
            <p><b>USN:</b> CS24182</p>
            <p>B.E. Computer Science Student</p>
          </div>
        </div>

        <div>
          <h3>Student Academic Performance Dashboard</h3>
          <p>Semester Progress Tracker</p>
        </div>
      </div>

      <div className="grid">

        <div className="card">
          <h3>Attendance Record</h3>
          <p>Current Attendance: 88%</p>

          <div className="progress">
            <div className="progress-bar attendance">
              88%
            </div>
          </div>

          <h3>Attendance</h3>

          <input
            type="number"
            id="attendanceInput"
            min="0"
            max="100"
          />

          <button onClick={updateAttendance}>
            Update
          </button>

          <div className="progress">
            <div
              id="attendanceBar"
              className="progress-bar"
              style={{ width: "0%" }}
            >
              0%
            </div>
          </div>
        </div>
        

        <div className="card">
          <h3>Course Completion</h3>
          <p>Completed Syllabus: 75%</p>

          <div className="progress">
            <div className="progress-bar course">
              75%
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Assignment Status</h3>
          <p>Assignments Submitted: 92%</p>

          <div className="progress">
            <div className="progress-bar assignment">
              92%
            </div>
          </div>

          <h3>Add Assignment</h3>

          <input
            type="text"
            id="assignmentName"
            placeholder="Assignment Name"
          />

          <input
            type="date"
            id="assignmentDate"
          />

          <button onClick={addAssignment}>
            Add Assignment
          </button>

          <ul id="assignmentList"></ul>

          <hr />
        </div>

        <div className="card">
          <h3>Upcoming Assignments</h3>
          <ul>
            <li>Web Technology Project - July 5</li>
            <li>DBMS Assignment - July 8</li>
            <li>Python Lab Report - July 10</li>
          </ul>
        </div>

        <div className="card">
          <h3>Examination Schedule</h3>

          <table>
            <tbody>
              <tr>
                <th>Subject</th>
                <th>Date</th>
              </tr>
              <tr>
                <td>Web Technology</td>
                <td>20 Jul</td>
              </tr>
              <tr>
                <td>DBMS</td>
                <td>23 Jul</td>
              </tr>
              <tr>
                <td>Computer Networks</td>
                <td>26 Jul</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3>Academic Performance</h3>

          <div className="chart">
            <div className="bar" style={{ height: "80%" }}>80</div>
            <div className="bar" style={{ height: "92%" }}>92</div>
            <div className="bar" style={{ height: "75%" }}>75</div>
            <div className="bar" style={{ height: "88%" }}>88</div>
            <div className="bar" style={{ height: "95%" }}>95</div>
          </div>

          <p style={{ textAlign: "center" }}>
            WT | DBMS | CN | Java | Python
          </p>
        </div>

        <div className="card">
          <h3>Achievements</h3>

          <div className="achievement">
            🏆 Coding Contest Finalist
          </div>

          <div className="achievement">
            🥇 Top 10% in Semester
          </div>

          <div className="achievement">
            📜 Python Certification
          </div>

          <h3>Add Achievement</h3>

          <input
            type="text"
            id="achievementInput"
          />

          <button onClick={addAchievement}>
            Add
          </button>

          <div id="achievementSection"></div>
        </div>

        <div className="card">
          <h3>Announcements</h3>

          <ul>
            <li>Semester Project Review on July 12.</li>
            <li>Hackathon Registration Open.</li>
            <li>Library Books Renewal Extended.</li>
          </ul>

          <h3>Add Announcement</h3>

          <input
            type="text"
            id="announcementInput"
          />

          <button onClick={addAnnouncement}>
            Post
          </button>

          <ul id="announcementList"></ul>
        </div>

        <div className="card">
          <h3>Personal Calendar</h3>

          <div className="calendar">
            <div className="day">1</div>
            <div className="day">2</div>
            <div className="day">3</div>
            <div className="day">4</div>
            <div className="day highlight">5</div>
            <div className="day">6</div>
            <div className="day">7</div>
            <div className="day">8</div>
            <div className="day">9</div>
            <div className="day highlight">10</div>
            <div className="day">11</div>
            <div className="day">12</div>
            <div className="day">13</div>
            <div className="day">14</div>
          </div>
        </div>

        <div className="card">
          <h3>Productivity Insights</h3>

          <div className="insight">
            📈 Attendance improved by 5% this month.
          </div>

          <div className="insight">
            ✅ 12 assignments completed on time.
          </div>

          <div className="insight">
            🎯 Focus on Computer Networks for better performance.
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;