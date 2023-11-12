function rot13(str) {
    return str.replace(/[A-Z]/g, (char) => {
        // Determine the decoded letter using ROT13 algorithm
        const decodedChar = String.fromCharCode((char.charCodeAt(0) - 65 + 13) % 26 + 65);
        return decodedChar;
    });
}

