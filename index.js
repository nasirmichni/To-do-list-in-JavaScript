

function add(){
    let inputText = document.getElementById("textInput").value;
    let output = document.querySelector(".output");
    let taskList = document.createElement("div");
    taskList.textContent = inputText;
    output.appendChild(taskList);
document.getElementById("textInput").value = "";
    
    }
function removeLast(){
    let output = document.querySelector(".output");
    let lastItem = output.lastChild;
    output.removeChild(lastItem);
}
function generate() {
    let student = {
        studentName: "Kamran",
        studentLastName: "Khan",
        studentRollNo: 23,
        studentClass: 8,
    };
let dataContainer = document.querySelector(".data");
dataContainer.innerHTML = "Name: " + student.studentName + " " + student.studentLastName + "<br>";
dataContainer.innerHTML += "Roll No: " + student.studentRollNo + "<br>";
dataContainer.innerHTML += "Student Class: " + student.studentClass + "<br>";
}


// let hotel = {
//     staff: [1, 2, 3, 4]
// };

// for (let i = 0; i < hotel.staff.length; i++) {
//     console.log(hotel.staff[i]);
// };

let hotel = {
    staff: ["Aamir", "Shahan", "Bilal", "Israr"]

};

document.getElementById("showStaffButton").addEventListener("click", function() {
    let staffListDiv = document.getElementById("staffList");
    staffListDiv.innerHTML = ""; 

    for (let i = 0; i < hotel.staff.length; i++) {
        let staffMember = document.createElement("p");
        staffMember.textContent = "Staff member " + (i+1) + ": " + hotel.staff[i];
        staffListDiv.appendChild(staffMember);
    }
});