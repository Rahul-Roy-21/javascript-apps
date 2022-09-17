/* 
Knowing Single thread exec., Global Contexts, Task/CB Queue

Async Js is used in cases where some request from servers takes a few seconds to resolve and the program goes on synchronously without stalling for the awaited results.

Callback functions were used till es6 was released and Pormises were introduced.. a better way to handle asynchronous data, until es7 introduced async await that is a abstraction over the complicated Promises' code, thus it way easier now..

*/

// Mimicing a server

const posts = [
  { id: 101, title: "Post One" },
  { id: 102, title: "Post two" },
  { id: 103, title: "Post three" },
];

// const showTime = () => {
//   console.log(new Date().getMilliseconds());
// };

const getPosts = () => {
  setTimeout(() => {
    let output = [];
    posts.forEach(({ id, title }) => {
      output.push(`Post[id=${id}', title=${title}]`);
    });
    console.log(output);
  }, 1000);
};

const createPost = (title) => {
  const newPost = { id: new Date().getTime().toString(), title };
  setTimeout(() => {
    posts.push(newPost);
    console.log("POST Created");
  }, 3000);
};

function createPost_with_Callback(title, callback_fn) {
  const newPost = { id: new Date().getTime().toString(), title };
  setTimeout(() => {
    posts.push(newPost);
    console.log("POST Created");

    // Callback function
    callback_fn();
  }, 3000);
}

/* 

// Async Code -> getPosts() takes less time and then post is added.
createPost("Post four");
getPosts();

*/

// Callback function
// createPost_with_Callback("Post four", getPosts);

// via. promises , avoid callbacks mess
function createPost_via_Promise(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        posts.push(post);
      } catch (error) {
        console.log(error);
        reject(error);
      }
      resolve();
    }, 2000);
  });
}

// createPost_via_Promise({ id: 210, title: "New Post via Promises" })
//   .then(() => {
//     getPosts();
//   })
//   .catch((err) => console.log(err));

// Promise.all
// const p1 = Promise.resolve("Hello Bengaluru !!");
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "GoodBye");
// });
// const p4 = 23;
// const fetchP3 = fetch("https://randomuser.me/api/?results=3").then((response) =>
//   response.json()
// );

// Promise.all([p1, p4, p2, fetchP3])
//   .then((values) => console.log(values))
//   .catch((err) => console.log(err));

// Async/await

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();
  console.log(data);
}

fetchUsers();
