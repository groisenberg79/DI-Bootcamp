function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
// - Function asyncCall is called -- an asyncronous function;
//
// - It consolelogs 'calling';
//
// - Variable 'result' is declared by taking as its value the
// output of 'resolveAfter2Seconds'. Since it is preceeded by
// the await keyword, function execution of asyncCall is suspended
// until this promise is resolved;
//
// - resolveAfter2Seconds returns a promise which will resolve itself
// only after 2 seconds. So 2 seconds pass and then it resolves itself
// with the string value 'resolved';
//
// - Now asyncCall is back in charge. The variable 'result' gets the
// output of resolveAfter2Seconds: the string 'resolved';
//
// - It consolelogs 'resolved'.
