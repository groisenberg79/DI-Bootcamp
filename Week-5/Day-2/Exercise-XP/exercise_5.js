const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

text = epic.reduce((accum, val) => accum + ' ' +  val);
console.log(text);