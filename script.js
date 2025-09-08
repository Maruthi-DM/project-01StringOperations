function analyze() {
      let str = document.getElementById("inputString").value.trim();
      if (str.length === 0) {
        alert("Please enter a string!");
        return;
      }

      document.getElementById("Lenght").value = str.length;

      document.getElementById("UpperCase").value = str.toUpperCase();

      document.getElementById("lowerCase").value = str.toLowerCase();


      let words = str.split(/\s+/);
      let middle = "";
      if (words.length === 1) {
        let len = str.length;
        if (len % 2 === 0) {
          middle = str.charAt(len / 2 - 1) + str.charAt(len / 2);
        } else {
          middle = str.charAt(Math.floor(len / 2));
        }
      }
      document.getElementById("Middle").value = middle;

      document.getElementById("words").value = words.length;


      let vowels = 0, consonants = 0;
      for (let ch of str.toLowerCase()) {
        if (/[a-z]/.test(ch)) {
          if ("aeiou".includes(ch)) vowels++;
          else consonants++;
        }
      }
      document.getElementById("Vowels").value = vowels;
      document.getElementById("Consonants").value = consonants;


      let camel = "";
      if (words.length > 0) {
        camel = words[0].toLowerCase();
        for (let i = 1; i < words.length; i++) {
          camel += words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
        }
      }
      document.getElementById("CamelCase").value = camel;
    }
  