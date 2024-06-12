// function createUser(name, id, numberOfProjects) {
//     let user = {};
//     user.name = name;
//     user.id = id;
//     user.numberOfProjects = numberOfProjects;
//     user.getProjects = function() {};
//     user.changeName = function() {};
//     user.incrementNoOfProjects = function() {};
//     user.decrementProject = function() {};
// }

// const user1 = {
//     id: 1,
//     username: 'John_Doe',
//     name: 'John Doe',
//     age: 30,
//     email: 'example@gmail.com'
// };

// const user2 = {
//     id: 2,
//     username: 'Jane_Smith',
//     name: 'Jane Smith',
//     age: 25,
//     email: 'jane@gmail.com'
// };

// const userList = [user1, user2];

// function displayUserInfo(users) {
//     const personInfoElement = document.getElementById('person-info');

//     personInfoElement.innerHTML = '';

//     users.forEach(user => {
//         const userInfoParagraph = document.createElement('p');
//         userInfoParagraph.textContent = `Name: ${user.name}, Age: ${user.age}`;
//         personInfoElement.appendChild(userInfoParagraph);
//     });
// }

// displayUserInfo(userList);

// function removeUserById() {
//     const userIdInput = document.getElementById('user-id');
//     const userId = parseInt(userIdInput.value, 10);

//     if(!isNaN(userId)) {
//         const indexToRemove = userList.findIndex(user => user.id === userId);

//         if (indexToRemove !== -1) {
//             userList.splice(indexToRemove, 1);

//             displayUserInfo(userList);

//             userIdInput.value = '';
//         } else ('User with the specified ID does not exist.')
//     } else {
//         alert('Please enter a valid user ID.')
//     }
// }


// Registration Form

let userList = [];

function registerUser() {
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const email = document.getElementById('email').value;

    if(!username || !name || isNaN(age) || !email) {
        alert('Please fill in all the fields with valid information');
        return;
    }

    //  Automatically assign an ID (Incremental)
    const userId = userList.length + 1;

    const newUser = {
        id: userId,
        username: username,
        name: name,
        age: age,
        email: email
    }

    userList.push(newUser);

    displayRegisteredUsers();
    clearRegistrationForm();

}

function displayRegisteredUsers() {
    const registeredUsersList = document.getElementById('registered-users');

    registeredUsersList.innerHTML = '';

    userList.forEach(user => {
        const userInfoParagraph = document.createElement('p');
        userInfoParagraph.textContent = `ID: ${user.id}, Username: ${user.username}, Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
        registeredUsersList.appendChild(userInfoParagraph)
    });

}

function clearRegistrationForm() {
    document.getElementById('username').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
}

