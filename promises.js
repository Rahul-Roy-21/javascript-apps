// Create a Promise for the Students who will score A+ Grade, they will get a IceCream for their choice..
const ICECREAM_STOCK = {
  vanilla: 1,
  chocolate: 2,
  strawberry: 2,
};

const processRequest = (student, marks) => {
  return new Promise((resolve, reject) => {
    console.log(
      `${student} SCORED ${marks}/100 in Maths -> PROCESSING your Request..`
    );

    setTimeout(() => {
      if (marks >= 90) {
        resolve(`Great Job !! Ice-cream on the Way !!`);
      } else {
        reject("Better Luck Next-time..");
      }
    }, 1000);
  });
};

const checkStock = (flavour) => {
  flavour = flavour.toLowerCase();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flavour in ICECREAM_STOCK && ICECREAM_STOCK[flavour] > 0) {
        ICECREAM_STOCK[flavour] -= 1;
        resolve(`${flavour} Icecream is PRESENT in Stock !!`);
      } else if (flavour in ICECREAM_STOCK && ICECREAM_STOCK[flavour] == 0) {
        reject(`${flavour} Flavour is Sold Out !!`);
      } else {
        reject(`${flavour} - No Such Flavour in Stock`);
      }
    }, 2000);
  });
};

const prepare_IceCream = (flavour) => {
  return new Promise((resolve, reject) => {
    checkStock(flavour)
      .then((msg) => {
        console.log(msg);
        console.log("Stock is now: ", ICECREAM_STOCK);
        resolve("Preparing...");
      })
      .catch((error) => {
        console.log("Can't Prepare..");
        reject(error);
      });
  });
};

const buyIceCream = (response, iceCream_choice) => {
  return new Promise((resolve, reject) => {
    console.log(response);

    prepare_IceCream(iceCream_choice)
      .then((msg) => {
        console.log(msg);
        setTimeout(
          () =>
            resolve(
              `Here's Your Choice of Ice-Cream : ${iceCream_choice}, Promise Fullfilled !!`
            ),
          3000
        );
      })
      .catch((err) => {
        reject(err);
      });
  });
};

function checkMarks(student, marks, iceCream) {
  processRequest(student, marks)
    .then((response) => {
      console.log("Request resolved , RESPONSE recieved !!");
      return buyIceCream(response, iceCream);
    })
    .then((processResp_Buy) => {
      console.log(processResp_Buy);
    })
    .catch((err) => {
      console.log(`SORRY !! ${err}`);
    });
}

const checkMarksAsync = async (student, marks, iceCream) => {
  try {
    const response = await processRequest(student, marks);
    console.log("Request resolved , RESPONSE recieved !!");

    const processed_Buy = await buyIceCream(response, iceCream);
    console.log(processed_Buy);
  } catch (err) {
    console.error(`SORRY !! ${err}`);
  }
};

// Asks
const queue = {
  Rahul: [99, "Chocolate"],
  Manushi: [88, "Vanilla"],
  Sunit: [98, "Vanilla"],
  Raman: [99, "Butter-Scotch"],
  Kushal: [92, "Chocolate"],
  Virat: [93, "Vanilla"],
  Naman: [91, "Strawberry"],
};

const fn = (name) => checkMarksAsync(name, queue[name][0], queue[name][1]);

// let name = "Sunit";
// fn(name).then(() => {
//   name = "Rahul";
//   fn(name);
// });

async function task() {
  for (const stud in queue) {
    console.log("\n---------- NEW ORDER -----------");
    await fn(stud);
    console.log("--------------------------------");
  }
}

task();
