const inspirationalQuotes = [
  "Il successo è l'abilità di passare da un fallimento all'altro senza perdere entusiasmo. - Winston Churchill",
  "Il solo modo per fare un grande lavoro è amare ciò che fai. - Steve Jobs",
  "La vita è ciò che ti accade mentre sei occupato a fare altri progetti. - John Lennon",
  "L'unica limitazione è quella che uno si impone. - Napoleon Hill",
  "Non conta quanto lentamente vai, finché non ti fermi. - Confucio"
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
  return inspirationalQuotes[randomIndex];
}

module.exports = { getRandomQuote };
