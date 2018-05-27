
function reverseThis(s) {
    let word = s.split('');
    console.log(word);
    return s.split("").reverse().join("");
}

function reverseWithForLoops(s) {
    var reverse = '';
    for (var i = s.length - 1; i >= 0; i--) {
        s += s[i];
        console.log(s);
    }
}
console.log(reverseThis("Sarthak"));