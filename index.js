const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

function titleCased() {
  return tutorials.map(title => {
    const words = title.split(' ');
    const correctedWords = words.map(word => {
      const wordLower = word.toLowerCase();


      const specialCases = {
        'oo': 'OO',
        'api': 'API',
        'nan': 'NaN',
        'jsonp': 'JSONP',
        'stoppropagation': 'StopPropagation',
        'preventdefault': 'PreventDefault',
        'constructor': 'Constructor'
      };

      if (specialCases.hasOwnProperty(wordLower)) {
        return specialCases[wordLower];
      }

      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

    return correctedWords.join(' ');
  });
}

module.exports = {
  titleCased
};
