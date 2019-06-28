#include "pch.h"
#include "main.h"
#include "mannysWeek.h"

storyline1 st1;

// GETTERS / WHAT I THINK GETTERS ARE

std::string mannysWeek::getRandomWrongAnswerText()
{

	char answer[4][80] = { "invalid answer, please enter the right thing to do.\n",
		"WRONG. Please enter a RIGHT.\n",
		"wow you havn't got it yet?.\n",
					"idk try again.\n" };

	constexpr int randomNumberMax = 3; // used to pick a random number that echos the x coordinate of the array.

	int randNum = rand() % (randomNumberMax + 1);

	return answer[randNum];

}

void mannysWeek::printIntro()
{

	LPCWSTR introSong = TEXT("titlescreen.wav");

	PlayWavFile(introSong, false);

	std::cout << " . . . . . . . . . .\n";
	std::cout << " . . . . . . . . . .\n";
	std::cout << " . . .o. w . o . . .\n";
	std::cout << " . . . . . . . . . .\n";
	std::cout << " . . .######## . . .\n";
	std::cout << " . . .## ## ## . . .\n";
	std::cout << " . . .######## . . .\n";
	std::cout << " . . .######## . . .\n";
	std::cout << " . . . .#### . . . .\n";
	std::cout << " . . . .#### . . . .\n";
	std::cout << " . . . .#### . . . .\n";
	std::cout << " . . . .#### . . . .\n";
	std::cout << " ..... .#  # .......\n";
	std::cout << " ..... .#  # .......\n";
	std::cout << " ..... .#  # .......\n";
	std::cout << " ..... .#  # .......\n";
	std::cout << " ... .###  ### .....\n";
	std::cout << " @ @ @@ @@@@@@@@@@ @\n";

	std::cout << "   - - Manny's - -\n";
	std::cout << "    - - week - -\n";
	std::cout << "play   options   exit\n";

	return;

}

int mannysWeek::executeIntroCommands()
{

	// input: play, options, or exit.

	std::string nextline = getNextInput();

	if (nextline.find("p") != std::string::npos || nextline.find("P") != std::string::npos)
	{

		// TODO further flesh out, add function.

	}
	else if (nextline.find("o") != std::string::npos || nextline.find("o") != std::string::npos)
	{

		// TODO make options screen able to be used.

	}
	else if (nextline.find("e") != std::string::npos || nextline.find("E") != std::string::npos)
	{

		std::cout << "Exiting program... Now!\n";

		exit(0);

	}
	else
	{

		std::cout << getRandomWrongAnswerText();

		executeScreenOne();

	}

	return 0;
}

/*
* What do I want this application to do
*/

// Interactive text based game.
// Basic Function
// TODO print intro function, show the ascii art.
// Setup play again while loop

// Gameplay ideas
// start off with a little bit of setup for the first scene

// STORY AND HOW IT PLAYS THROUGH

// * SCREEN 1 *

// Im calling them screens here to represent "scenes"
// the game has to go through to be able to select the correct
// "story sequence."

void mannysWeek::printScreen1Scene1()
{

	// BANG BANG!
	// a door creeks open...
	// Manny:
	// What was that??
	// manny looks around.. its too dark.
	// - what do?
	std::cout << "\n";
	std::cout << "BANG BANG!\n";
	std::cout << "a door creeks open...\n";
	std::cout << "Manny:\n";
	std::cout << "What was that??\n";
	std::cout << "he looks around.. its too dark.\n";
	std::cout << "- what do?\n";

	return;

}

int mannysWeek::executeScreenOne()
{

	// input: turn on light

	std::string nextline = getNextInput();

	if (nextline.find("on") != std::string::npos && nextline.find("light") != std::string::npos)
	{

		return 0;

	}
	else
	{

		std::cout << getRandomWrongAnswerText();

		executeScreenOne();

	}

	return 0;

}

int mannysWeek::screenOne()
{

	printScreen1Scene1();
	executeScreenOne();

	return 0;

}

// * SCREEN 2 *

void mannysWeek::printScreen2Scene1()
{

	// manny walks over and turns on the light..
	// CLICK!
	// flinching to the light, he slowly adjusts.
	// the room lit by the lamp he can make out only
	// a few things: a table with water (up), an old style
	// juke speaker(right), some books or something(down),
	// and a dresser(left).
	// - which way do you move? - line break.
	std::cout << "\n";
	std::cout << "manny walks over and turns on the light..\n";
	std::cout << "CLICK!\n";
	std::cout << "flinching to the light, he slowly adjusts.\n";
	std::cout << "the room lit by the lamp he can make out only\n";
	std::cout << "a few things: a table with water (up), an old style\n";
	std::cout << "juke speaker(down), some books or something(left),\n";
	std::cout << "and a dresser(right).\n";
	std::cout << "- which way do you move?\n";

	return;

}

int mannysWeek::getStorylineDecision()
{

	// input: up down left or right.

	int i = 0;

	std::string nextline = getNextInput();

	if (nextline.find("up") != std::string::npos)
	{

		// Execute up function. Used to switch the "gameline" to 0

		i = 1;

	}
	else if (nextline.find("down") != std::string::npos)
	{

		// Execute up function. Used to switch the "gameline" to 1

		i = 2;

	}
	else if (nextline.find("left") != std::string::npos)
	{

		// Execute up function. Used to switch the "gameline" to 2

		i = 3;

	}
	else if (nextline.find("right") != std::string::npos)
	{

		// Execute up function. Used to switch the "gameline" to 3

		i = 4;

	}
	else
	{

		std::cout << getRandomWrongAnswerText();

	}

	return i;

}

int mannysWeek::screenTwo()
{

	printScreen2Scene1();

	return 0;

}

//         //
// DISCARD // I got a new idea and would rather use that.
//         //

// if up
// Manny:
// Theres a fly in it... 
// - which way do you move?

// if right
// Manny:
// It's a little late to play music...
// - which way do you move? - line break.

// if down
// Manny:
// Ah, seems like a nice time to read. - line break.
// Manny sits down to read.
// - wait 3 seconds.
// I shoulda read this last semester.
// - which way do you move? - line break

// if left
// Manny:
// Huh, the attic key.
// - inventory is full, please 
// - which way do you move? - line break.

//            //
// UP TO HERE //
//            //

// CONTINUE

int mannysWeek::selectStoryLine()
{

	// select storyline cpp file to read from.

	int storyline = getStorylineDecision();

	if (storyline == 1)
	{

		st1.startStoryline1();

	}
	else if (storyline == 2)
	{

		// TODO storyline 2

	}
	else if (storyline == 3)
	{

		// TODO storyline 3

	}
	else if (storyline == 4)
	{

		// TODO storyline 4

	}

	return 0;

}

//              //
// END SEQUENCE //
//              //

void mannysWeek::printEndSequence1()
{

	// As I stand there, drifting away
	// The Big Blue Man sees me through the crack in the wall,
	// - do you feel you've seen all there is to be seen here? (y/n)
	std::cout << "\n";
	std::cout << "As I stand there, drifting away\n";
	std::cout << "The Big Blue Man sees me through the crack in the wall,\n";
	std::cout << "- do you feel you've seen all there is to be seen here? (y/n)\n";

	return;

}

int mannysWeek::executeEndSequence()
{

	bool input = false;

	std::string nextline = getNextInput();

	if (nextline == "y" || nextline == "yes")
	{

		// IF yes

		return 0;

	}
	else if (nextline == "n" || nextline == "no")
	{

		// IF NO RETURN TO LAST QUESTION

		// TODO make a returnToLastQuestion master function that saves the last time a question was
		// asked.

	}
	else
	{

		executeEndSequence();

	}

	return 0;

}

void mannysWeek::printEndSequence2()
{

	// I feel compelled to walk towards the crack,
	// I cant believe what I see, a cyan room, 
	// barely made to be made out,
	// Abominations,
	// filling the room...
	// It feels like a nightmare.
	std::cout << "\n";
	std::cout << "I feel compelled to walk towards the crack,\n";
	std::cout << "I cant believe what I see, a cyan room,\n";
	std::cout << "barely made to be made out,\n";
	std::cout << "Abominations,\n";
	std::cout << "filling the room...\n";
	std::cout << "It feels like a nightmare.\n";

	return;

}

int mannysWeek::endSequence()
{

	printEndSequence1();
	executeEndSequence();
	printEndSequence2();

	// restart game.

	return 0;

}
