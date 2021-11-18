import React from 'react';
import GuessLetter from '../Componnents/GuessLetter';



function App() {
  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}} className="App">
     <GuessLetter isGuess={true} letter='L'/>
    </div>
  );
}

export default App;
