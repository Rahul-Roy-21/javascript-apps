const submitBtn = document.querySelector(".submitBtn");
const clearBtn = document.querySelector(".clearBtn");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const alertField = document.querySelector("#msg");
const user_UList = document.querySelector("#users");

// LocalStorage
const localStorage_variable = "Traversy_JSCrashCourse_users";

function renderUsers() {
  const listStr = localStorage.getItem(localStorage_variable);
  if (!listStr) {
    console.log("Empty list");
    return;
  }
  const userList = JSON.parse(listStr);

  user_UList.innerHTML = "";
  userList.forEach((user) => {
    const { id, name, email } = user;
    const newItem = document.createElement("li");
    newItem.id = `userItem-${id}`;
    newItem.innerHTML = `${name}&nbsp;<b>${email}</b>`;

    user_UList.appendChild(newItem);
  });
}

function addUser(name, email) {
  console.log(typeof localStorage.getItem(localStorage_variable));

  let userList = JSON.parse(localStorage.getItem(localStorage_variable));
  console.log(userList);
  const newUser = {
    id: new Date().getTime().toString(),
    name,
    email,
  };

  userList = userList ? [...userList, newUser] : [newUser];

  localStorage.setItem(localStorage_variable, JSON.stringify(userList));

  // re-rendering
  renderUsers();
}

const showAlert = (msg, alertType) => {
  alertField.classList.add(`alert-${alertType}`);
  alertField.innerHTML = `<h3>${msg}</h3>`;

  setTimeout(() => {
    alertField.classList.remove(`alert-${alertType}`);
    alertField.innerHTML = "";
  }, 2000);
};

const handleSubmit = (e) => {
  e.preventDefault();

  const name = nameField.value;
  const email = emailField.value;

  if (!name || !email) {
    showAlert("Please Enter All Fields", "danger");
  } else {
    // Add new li item
    addUser(name, email);

    // Show alert
    showAlert("Item Added Successfully !!", "success");

    // Clear field
    nameField.value = "";
    emailField.value = "";
  }
};

submitBtn.addEventListener("click", handleSubmit);
renderUsers();

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (user_UList.innerHTML) {
    user_UList.innerHTML = "";
    localStorage.setItem(localStorage_variable, JSON.stringify([]));

    showAlert("Cleared the User List !!", "success");
  } else {
    showAlert("List Already Empty !!", "danger");
  }
});
