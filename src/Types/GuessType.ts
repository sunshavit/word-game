export interface GuessLetters {
   letter : string;
   isGuess : boolean;
}

export interface Guess {
   guess : string[];
   img ?: string | null;
   selectedCard : number; 
   mistake : number;
   correct : number;
   hint : number,
}
