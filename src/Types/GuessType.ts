export interface GuessLetters {
   letters : String;
   isGuess : boolean;
}

export interface Guess {
   guess : GuessLetters[];
   img : String | null;
   selectedCard : Number; 
}
