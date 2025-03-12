let achievement = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("You did it -- you waited 4 seconds to see this crap!");
    } else {
      reject("You will never read this ... Too bad!");
    }
  }, 4000);
}).then((resolve) => console.log(resolve));
