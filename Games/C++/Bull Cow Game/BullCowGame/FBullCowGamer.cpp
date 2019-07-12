#include "FBullCowGamer.h"

using int32 = int;

FBullCowGame::FBullCowGame() { Reset(); }

int32 FBullCowGame::GetMaxTries() const { return MyMaxTries; } // getter
int32 FBullCowGame::GetCurrentTry() const { return MyCurrentTry; } // getter
bool FBullCowGame::IsGameWon() const { return false; }
bool FBullCowGame::CheckGuessValidity(FString) { return false; }

//receives valid guess, increments turn, returns count.
FBullCowCount FBullCowGame::SubmitGuess(FString Guess)
{
	// increment turn number
	MyCurrentTry++;

	// setup return var
	FBullCowCount BullCowCount;

	// loop through letters in guess
	int32 HiddenWordLength = MyHiddenWord.length();
	for (int32 i = 0; i < HiddenWordLength; i++) {
		// compare letters against hidden word

		for (int32 j = 0; j < HiddenWordLength; j++) {
			if (Guess[i] == MyHiddenWord[i]) { 	// if match,
				if (i == j){
					BullCowCount.Bulls++; // increment bulls
				}

				else {
					BullCowCount.Cows++; // increment cows
				}
			}
		}
	}

	return BullCowCount;

}

void FBullCowGame::Reset()
{
	constexpr int32 MAX_TRIES = 8;
	const FString HIDDEN_WORD = "planet";
	MyHiddenWord = HIDDEN_WORD;

	MyCurrentTry = 1;
	MyMaxTries = MAX_TRIES;

	return;
}