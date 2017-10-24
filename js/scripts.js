$(document).ready(function() {
  $('#string-form').submit(function(event){
    event.preventDefault();

    var userString = $('#string-input').val();
    var userWordArr = userString.split(" ");
    var vowelsArr = ['a','e','i','o','u'];
    var newSentence = [];
    var newLetters = [];
    var newWord = [];
    userWordArr.forEach(function(word) { // ["word","word"]
      var userLetters = word.split(""); // ["w","o","r","d"]
      userLetters.forEach(function(letter) {
        var isVowel = false;
        vowelsArr.forEach(function(vowel) { // makes newWord
          if (vowel === letter) {
            newLetters.push('-');
            isVowel = true;
          } else if (vowel === 'u' && !isVowel) {
            newLetters.push(letter);
          }
        });
      });
      newSentence.push(newLetters.join(""));
      console.log(newWord);
      console.log(newSentence);
      newLetters = []; // needed to empty here because variable wouldnt overwrite
    });
    newSentence = newSentence.join(" ");
    alert(newSentence);
  });
});




    // userWordArr.forEach(word) {
    //   var userLetters = word.split(""); // ['w','o','r','d']
    //   userLetters.forEach(letter){
    //     vowelArr.forEach(vowel);
    //     if (letter === vowel) {
    //
    //     }
    //   }
    // }
