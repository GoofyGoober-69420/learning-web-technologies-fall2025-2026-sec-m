function namevalidation() {
    let name = document.getElementById('name').value.trim();
    if (name.length === 0) {
        alert("Please enter valid name");
        return false;
    }

    let firstCharCode = name.charCodeAt(0);
    let isFirstCharLetter = (firstCharCode >= 65 && firstCharCode <= 90) || 
                            (firstCharCode >= 97 && firstCharCode <= 122); 
    if (!isFirstCharLetter) {
        alert("Please enter valid name");
        return false;
    }

    let words = name.split(' ');
    let wordCount = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            wordCount++;
        }
    }
    if (wordCount < 2) {
        alert("Please enter valid name");
        return false;
    }

    for (let i = 0; i < name.length; i++) {
        let char = name.charAt(i);
        let charCode = name.charCodeAt(i);
        let isLetter = (charCode >= 65 && charCode <= 90) ||
                       (charCode >= 97 && charCode <= 122);
        let isDot = (char === '.');
        let isDash = (char === '-');
        let isSpace = (char === ' ');
        if (!(isLetter || isDot || isDash || isSpace)) {
            alert("Please enter valid name");
            return false;
        }
    }

    return true;
}

function emailvalidation() {
    let email = document.getElementById('email').value.trim();

    if (email.length === 0) {
        alert("Email cannot be empty");
        return false;
    }

    let atPosition = email.indexOf('@');
    let dotPosition = email.lastIndexOf('.');

    if (atPosition < 1) {
        alert("A valid email must include an '@' symbol.");
        return false;
    }

    if (email.indexOf('@') !== email.lastIndexOf('@')) {
        alert("Email cannot have more than one '@' symbol.");
        return false;
    }

    if (dotPosition < atPosition) {
        alert("A valid email must have a '.' after the '@' symbol.");
        return false;
    }

    if (dotPosition === atPosition + 1) {
        alert("Invalid email format.");
        return false;
    }

    if (dotPosition === email.length - 1) {
        alert("Email cannot end with a '.'.");
        return false;
    }

    let domain = email.substring(dotPosition); 
    
    if (domain !== ".com") {
        alert("Email domain must be .com");
        return false;
    }

    return true;
}