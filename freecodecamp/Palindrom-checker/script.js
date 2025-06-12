document.getElementById('check-btn').addEventListener('click', function() {
    const inputElement = document.getElementById('text-input');
    const resultElement = document.getElementById('result');
    const inputText = inputElement.value.trim();
  
    if (!inputText) {
      alert('Please input a value');
      return;
    }
  
    const processedText = inputText.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversedText = processedText.split('').reverse().join('');
  
    if (processedText === reversedText) {
      resultElement.innerText = `${inputText} is a palindrome`;
    } else {
      resultElement.innerText = `${inputText} is not a palindrome`;
    }
  });