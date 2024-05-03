(function () {
  'use strict';
  console.log('Window loaded!');


  window.addEventListener('load', init);
  const encrypt = document.querySelector('#encrypt-it');

  const text = document.querySelector('#input-text');

  const result = document.querySelector('#result');
  const reset = document.querySelector('#reset');

  encrypt.addEventListener('click', encryptClick);
  reset.addEventListener('click', resetClick);

  function init() {
      console.log('loaded');
  }
  
  function resetClick() {
    result.innerHTML = '';
    text.value = '';
  }

  function encryptClick(e) {
      console.log('Button clicked!');
      const newText = shiftCipher(text.value);

      result.innerHTML = newText;
  }

  function shiftCipher(text) {
      text = text.toLowerCase();
      let result = '';
      for (let i = 0; i < text.length; i++) {
          if (text[i] < 'a' || text[i] > 'z') {
              result += text[i];
          } else if (text[i] == 'z') {
              result += 'a';
          } else {
              const SHIFT = 1;
              let letter = text.charCodeAt(i);
              let resultLetter = String.fromCharCode(letter + SHIFT);
              result += resultLetter;
          }
      }
      return result;
  }
})();