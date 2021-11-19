import React from "react";
import { Guess } from "./GuessType";
import { ServerResponse } from "./serverType";

export interface ContextResponse {
    movieData ?: ServerResponse;
    guesses ?: Guess;
    setGuesses : any;
 }