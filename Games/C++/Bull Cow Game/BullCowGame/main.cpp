/*
	This is the console exe that makes use of the bullcoe class. THis acts as the
	view in a MVC patternm and is responsible fr all user interaction. For logic, see FBullCowGamer class.
*/
#include <iostream>
#include <string>
#include "FBullCowGamer.h"

using FText = std::string;
using int32 = int;

void PrintIntro();
void PlayGame();
FText GetGuess();
bool AskToPlayAgain();

FBullCowGame BCGame; // instantiate (create instance) a new game

// the entry point for our application
int main()
{
	bool bPlayAgain = false;

	do 
	{
		PrintIntro();
		PlayGame();
		bPlayAgain = AskToPlayAgain();
	} while (bPlayAgain);

	return 0; // exit the application
}

// introduce the game

void PrintIntro()
{
	constexpr int32 WORLD_LENGTH = 9;

	std::cout << "Welcome to Bulls and Cows, a fun word game.\n";
	std::cout << "Can you guess the " << WORLD_LENGTH;
	std::cout << " letter isogram I'm thinking of?\n";
	std::cout << std::endl;
	return;

}

void PlayGame()
{
	BCGame.Reset();
	int32 MaxTries = BCGame.GetMaxTries();

	// loop for number of turns asking for guesses
	// TODO change FOR to WHILE loop once we are validating guesses

	for (int32 count = 1; count <= MaxTries; count++) {
		FText Guess = GetGuess(); // TODO make loop check for validity

		// submit valid guess to game and receive count
		FBullCowCount BullCowCount = BCGame.SubmitGuess(Guess);
		// print number  bulls and cows
		std::cout << "Bulls = " << BullCowCount.Bulls;
		std::cout << ". Cows = " << BullCowCount.Cows;
		std::cout << std::endl;
	}

	// TODO summarise game

}

FText GetGuess()
{
	int32 CurrentTry = BCGame.GetCurrentTry();
	std::cout << "Try " << CurrentTry << ". ";

	// get a guess from the player
	std::cout << "Enter your guess: ";
	FText Guess = "";

	std::getline(std::cin, Guess);
	return Guess;
}

bool AskToPlayAgain() 
{
		std::cout << "Do you want to play again? (y/n)";
		FText Answer = "";
		std::getline(std::cin, Answer);
		return (Answer[0] == 'y') || (Answer[0] == 'Y');
		std::cout << std::endl;
}