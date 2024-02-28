export function separateAndCapitalize(word) {
    // Capitalize the first letter
    word = word.charAt(0).toUpperCase() + word.slice(1);
    // Insert a space before each capital letter g indicate globally, not only one character,
    word = word.replace(/([A-Z])/g, ' $1');

    return word;
}
    