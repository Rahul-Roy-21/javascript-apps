// DOM -> Tree like structure of our document
console.log(window); // Window refers to the browser

// Window gives us alert, document, fetch(.api), innerWidth, innerHeight, localStorage etc..

// Writing window.alert/ window.document is same as alert()/ docuemnt

// Single-element selectors
const form = document.getElementById("my-form");
const container = document.querySelector(".container");
console.log(form);

const itemArr = document.querySelectorAll(".item");
console.log(itemArr);

// querySelectorAll() gives NodeList, Array methods can be used, whereas getElementByClassName(), getElementByTagName() gives HTMLCollection that can't be processed via. JS Array methods.
itemArr.forEach((item) => console.log(item));

// DOM Manipualation
const ul_items = document.querySelector(".items");
ul_items.lastElementChild.remove();
ul_items.firstElementChild.textContent = "Modified via. textContent !!";

let father = "Shyamal Roy";
ul_items.children[1].innerHTML = `<h1>${father}</h1>`;

// NOTE: Dom manipulated output appears in previous console.logs, eg. see log(itemArr)

ul_items.lastElementChild.style.background = "aqua";

// Event listeners
const submitBtn = document.querySelector(".btn");

submitBtn.addEventListener("click", (e) => {
  // by default forms are submitted and page gets refreshed !!
  e.preventDefault();

  console.log(e.target);
  // e is the event variable that has all deatils of event like eventType, mouse_Position, target element

  console.log(e.target.className, e.target.id || "No_ID", e.target.type);

  const body_classList = document.querySelector("body").classList;

  // Toggle class
  if (body_classList.contains("bg-pink")) {
    body_classList.remove("bg-pink");
  } else {
    body_classList.add("bg-pink");
  }
});
