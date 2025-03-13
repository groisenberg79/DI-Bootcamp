function makeAllCaps(array) {
  const all_caps = new Promise((resolve, reject) => {
    const result = array.every((word) => {
      return typeof word == "string";
    }); // check if every word is a string in the array
    if (result) {
      const new_array = array.map((word) => word.toUpperCase());
      resolve(new_array);
    } else {
      reject("Error: some words are not strings");
    }
  });
  return all_caps;
}

function sortWords(array) {
  const sorted_words = new Promise((resolve, reject) => {
    if (array.length > 4) {
      resolve(array.sort());
    } else {
      reject("Error: the array is to small.");
    }
  });
  return sorted_words;
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));
