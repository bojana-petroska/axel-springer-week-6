const students = ['Alice', 'Bob', 'Charlie', 'David', 'Emily'];

const studentList = document.getElementById("student-list");
console.log(studentList);

function updateStudentList() {
    // clear the student list
    studentList.innerHTML = "";

    students.forEach(student => {
        const listItem = document.createElement('li');
        listItem.textContent = student;
        studentList.appendChild(listItem);
    });

    document.getElementById("student-name").value = "";
}

updateStudentList();

const addButton = document.getElementById('add-student');
addButton.addEventListener('click', () => {
    const studentName = document.getElementById('student-name').value;
    students.push(studentName);
    updateStudentList();
    console.log('bo')
})


const deleteButton = document.getElementById('delete-button');
console.log(deleteButton);
deleteButton.addEventListener('click', () => {
    const deleteStudentName = document.getElementById('delete-student-name').value;
    //console.log(deleteStudentName);

    const indexToDelete = students.indexOf(deleteStudentName);
    //console.log(deleteStudentName);

    if (indexToDelete !== -1) {
        students.splice(indexToDelete, 1);
        console.log(students)
        updateStudentList();
        console.log('brrr')
    }
});
