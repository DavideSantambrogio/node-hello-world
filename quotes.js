const inspirationalQuotes = [
  {
    quote: "Il successo è l'abilità di passare da un fallimento all'altro senza perdere entusiasmo.",
    author: "Winston Churchill"
  },
  {
    quote: "Il solo modo per fare un grande lavoro è amare ciò che fai.",
    author: "Steve Jobs"
  },
  {
    quote: "La vita è ciò che ti accade mentre sei occupato a fare altri progetti.",
    author: "John Lennon"
  },
  {
    quote: "L'unica limitazione è quella che uno si impone.",
    author: "Napoleon Hill"
  },
  {
    quote: "Non conta quanto lentamente vai, finché non ti fermi.",
    author: "Confucio"
  }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
  return inspirationalQuotes[randomIndex];
}

module.exports = { getRandomQuote };
