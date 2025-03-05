const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

// item 1
const newArray = [];
gameInfo.forEach(player => {
  newArray.push(player.username + '!');
  })
console.log(newArray);

// item 2
const biggerThanFive = [];
gameInfo.forEach(player => {
  if (player.score > 5){
    biggerThanFive.push(player.username);
  }
})
console.log(biggerThanFive);

// item 3
let total_score = 0;
gameInfo.forEach(player => {
  total_score += player.score;
})
console.log(total_score);
