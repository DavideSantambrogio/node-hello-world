const inspirationalQuotes = [
  {
    quote: "Il successo è l'abilità di passare da un fallimento all'altro senza perdere entusiasmo.",
    author: "Winston Churchill"
  },
  {
    quote: "Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno.",
    author: "Robert Collier"
  },
  {
    quote: "Il segreto del successo è la costanza nei propositi.",
    author: "Benjamin Disraeli"
  },
  {
    quote: "Non è mai troppo tardi per essere ciò che avresti voluto essere.",
    author: "George Eliot"
  },
  {
    quote: "Credi in te stesso e in tutto ciò che sei. Sappi che c'è qualcosa dentro di te che è più grande di qualsiasi ostacolo.",
    author: "Christian D. Larson"
  },
  {
    quote: "L'unico modo per fare un ottimo lavoro è amare quello che fai.",
    author: "Steve Jobs"
  },
  {
    quote: "Il futuro appartiene a coloro che credono nella bellezza dei propri sogni.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "La vita è 10% cosa ti accade e 90% come reagisci.",
    author: "Charles R. Swindoll"
  },
  {
    quote: "Non aspettare. Il tempo non sarà mai giusto.",
    author: "Napoleon Hill"
  },
  {
    quote: "Inizia dove sei. Usa quello che hai. Fai quello che puoi.",
    author: "Arthur Ashe"
  },
  {
    quote: "Il modo migliore per prevedere il futuro è crearlo.",
    author: "Peter Drucker"
  }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);

  return inspirationalQuotes[randomIndex];

}


module.exports = {
  getRandomQuote

};
