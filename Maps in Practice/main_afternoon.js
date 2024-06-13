let studentNames = new Map();

studentNames.set('bo', 10);
studentNames.set('angel', 10);
studentNames.set('melisa', 10);
studentNames.set('milka', 10);
studentNames.set('stella', 10);
studentNames.set('hope', 10);

let gradesList = document.getElementById('grades-list');
console.log(studentNames);

const groupList1 = document.getElementById('group-list-1');
const groupList2 = document.getElementById('group-list-2');

const arrayMap = Array.from(studentNames.entries());
console.log(arrayMap);
const groupMap1 = new Map(arrayMap.slice(0, 3));
const groupMap2 = new Map(arrayMap.slice(3, 5));
console.log(groupMap1);
console.log(groupMap2);

function showGradesList() {
  gradesList.innerHTML = '';

  studentNames.forEach((grade, student) => {
    gradesList.innerHTML += `<p>The grade from ${student} is: ${grade}.</p>`;
  });

  groupMap1.forEach((grade, student) => {
    groupList1.innerHTML += `<p>Student: ${student} has grade: ${grade}</p>`;
  });

  groupMap2.forEach((grade, student) => {
    groupList2.innerHTML += `<p>Student: ${student} has grade: ${grade}</p>`;
  });
}

showGradesList();

// Task 3: Create a Set of Unique Student Hobbies

const studentHobbiesList = document.getElementById('hobbies-list');

const studentHobbies = [
  'running',
  'swimming',
  'gym',
  'singing',
  'surfing',
  'running',
];

const uniqueStudentHobbies = new Set(studentHobbies);
console.log(uniqueStudentHobbies);

studentHobbiesList.textContent =
  'Unique list of hobbies contains: ' + [...uniqueStudentHobbies].join(', ');

// Task 4: Combine Two Sets of Student Names

const combinedNamesList = document.getElementById('combined-names-list');

const uniqueStudentNames1 = new Set();
const uniqueStudentNames2 = new Set();

uniqueStudentNames1.add('bo');
uniqueStudentNames1.add('george');
uniqueStudentNames1.add('elena');
uniqueStudentNames1.add('ejs');
uniqueStudentNames2.add('lefter');
uniqueStudentNames2.add('done');
uniqueStudentNames2.add('mia');

const combinedStudentNames = [...uniqueStudentNames1, ...uniqueStudentNames2];

combinedNamesList.textContent =
  'Combined list of unique names are: ' + [...combinedStudentNames].join(', ');

console.log(combinedStudentNames);
