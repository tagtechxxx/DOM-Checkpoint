function palindrome(str) {
 var arre = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(arre, '');
 var leng = str.length;
 for (var i = 0; i < leng/2; i++) {
   if (str[i] !== str[leng - 1 - i]) {
       return false;
   }
 }
 return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("almostomla"));
console.log(palindrome("never odd or even"));
console.log(palindrome("1 eye for of 1 eye."));