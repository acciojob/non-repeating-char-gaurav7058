function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

    // Count the occurrences of each character in the string
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find the first character that occurs only once
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If there is no non-repeated character, return null
    return null;
}
// const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
