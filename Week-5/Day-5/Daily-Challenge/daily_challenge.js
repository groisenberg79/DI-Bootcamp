// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.

function isAnagram (word1, word2){
    const letter_list1 = [... word1];
    const letter_list2 = [ ... word2];
    if (letter_list1.length != letter_list2.length){
        return false;
    } else {
        const match = letter_list1.filter(letter1 => {
            for (let letter2 of letter_list2){
                if (letter1 == letter2){
                    letter_list2.splice(letter_list2.indexOf(letter2), 1);// if there's a match, take out the matching letter in the 2nd array (to avoid future false matches)
                    return true; // add the matching letter to 'match'
                }
            }
            return false; // if not letter in the 2nd array matched the letter in the 1st array, do not add it to 'match'
        })
        if (match.length < letter_list1.length){
            return false;
        } else return true;
    }
    
      
}
console.log(isAnagram('banana', 'banana'));
console.log(isAnagram('map', 'pam'))
console.log(isAnagram('plea', 'leap'))
console.log(isAnagram('plea', 'play'))
console.log(isAnagram('moose', 'mouse'))
