function removeVowels(inputString) {
    let result = '';
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i].toLowerCase();
  
      if ('aéèeiou'.indexOf(char) === -1) {
        result += inputString[i]; 
      }
    }
  
    return result;
  }
  
  const inputString = "Les mystères profonds de l'univers sont fascinants, mais aucun n'est aussi énigmatique et captivant qu'un trou noir, où la gravité est si intense qu'elle dévore même la lumière elle-même, créant une obscurité absolue dans l'espace infini"; 
  
  const resultString = removeVowels(inputString);
  console.log(resultString);
  