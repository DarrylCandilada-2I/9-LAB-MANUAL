import React, { useState } from 'react';
import './App.css';

function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');

  const translateWord = () => {
    // Simulated translation mapping
    const translations = {
      hello: 'kamusta',
      world: 'mundo',
      music: 'musika',
      dance: 'sayaw',
      sing: 'kumanta',
      song: 'kanta',
      movie: 'pelikula',
      television: 'telebisyon',
      goodbye: 'paalam',
      friend: 'kaibigan',
      love: 'pag-ibig',
      family: 'pamilya',
      food: 'pagkain',
      water: 'tubig',
      school: 'paaralan',
      book: 'libro',
      car: 'sasakyan',
      house: 'bahay',
      tree: 'puno',
      flower: 'bulaklak',
      sun: 'araw',
      moon: 'buwan',
      star: 'bituin',
      sky: 'langit',
      ocean: 'karagatan',
      mountain: 'bundok',
      river: 'ilog',
      city: 'lungsod',
      country: 'bansa',
      example: 'halimbawa'
      // Add more translations as needed
    };

    const translation = translations[englishWord.toLowerCase()];
    setTagalogTranslation(translation || 'Translation not found');
  };

  return (
    <div className="container">
      <h1>English to Tagalog Translator</h1>
      <div className="input-group">
        <label>English Word:</label>
        <input type="text" value={englishWord} onChange={(e) => setEnglishWord(e.target.value)} />
      </div>
      <button onClick={translateWord}>Translate</button>
      {tagalogTranslation && (
        <div>
          <h2 className="translation-heading">Tagalog Translation:</h2> {/* Added class here */}
          <p>{tagalogTranslation}</p>
        </div>
      )}
    </div>
  );
}

export default App;
