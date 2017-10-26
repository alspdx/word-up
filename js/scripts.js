var wordsArray = function(sentence) {
  return sentence.split(" ");
};

var lettersArray = function(words) {
  return words.split("");
};

var sentenceProcessor = function(userSentence) {
  var userWords = wordsArray(userSentence);
  var newWords = [];
  var newSentence = [];
  userWords.forEach(function(word) {
    var userLetters = lettersArray(word);
    var newLetters = [];
    var vowels = /[aeiouAEIOU]/;
    userLetters.forEach(function(letter) {
      if (vowels.test(letter)) {
        newLetters.push("-");
      } else {
        newLetters.push(letter);
      };
    });
    newWords = newLetters.join("");
    newSentence.push(newWords);
  });
  return newSentence.join(" ");
};

$(document).ready(function() {
  $('#string-form').submit(function(event){
    event.preventDefault();
    var userInput = $('#string-input').val();
    var output = sentenceProcessor(userInput);
    $('#user-output').text(output);
  });
});
