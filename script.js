function updateAttendance() {
    let value = document.getElementById("attendanceInput").value;

    document.getElementById("attendanceBar").style.width =
        value + "%";

    document.getElementById("attendanceBar").innerHTML =
        value + "%";
}

function addAssignment() {
    let name = document.getElementById("assignmentName").value;
    let date = document.getElementById("assignmentDate").value;

    let li = document.createElement("li");
    li.innerHTML = name + " - " + date;

    document.getElementById("assignmentList")
        .appendChild(li);
}

function addExam() {
    let subject =
        document.getElementById("examSubject").value;

    let date =
        document.getElementById("examDate").value;

    let row = document.createElement("tr");

    row.innerHTML =
        "<td>" + subject + "</td>" +
        "<td>" + date + "</td>";

    document.getElementById("examTable")
        .appendChild(row);
}

function addAchievement() {
    let achievement =
        document.getElementById("achievementInput").value;

    let p = document.createElement("p");

    p.innerHTML = "🏆 " + achievement;

    document.getElementById("achievementSection")
        .appendChild(p);
}

function addAnnouncement() {
    let text =
        document.getElementById("announcementInput").value;

    let li = document.createElement("li");

    li.innerHTML = text;

    document.getElementById("announcementList")
        .appendChild(li);
}