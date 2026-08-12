function firstNonRepeatingChar(str) {
    const count = {};

    // Count frequency
    for (const ch of str) {
        // console.log("Counting character:", ch);
        count[ch] = (count[ch] || 0) + 1;
        // console.log("Counting count:", count);
    }
      console.log("Character counts:", count);

    // Find first non-repeating character
    for (const ch of str) {
        // console.log("Checking character:", ch);
        if (count[ch] === 1) {
            console.log("Found non-repeating character:", ch);
            return ch;
        }
    }

    return null; // No non-repeating character
}

console.log(firstNonRepeatingChar("aabbccddefa"));