#include "pch.h"
#include "main.h"

//       //
// if up //
//       //

// I want gameplay in this story to be based on different ways I can mess
// with the user and see if I can make them notice that.

//
// Gameplay Ideas and Options for this storyline:
//

	// 

void storyline1::printIntro()
{

	// Manny:
	// "The water has a fly in it..."
	// Manny suddenly, just now notices the door
	// - How do you open it?
	std::cout << "\n";
	std::cout << "Manny:\n";
	std::cout << "'The water has a fly in it..'\n";
	std::cout << "Manny suddenly, just now notices the door\n";
	std::cout << "- How do you open it?\n";

	std::string nextline = getNextInput();

	std::cout << "\n";
	std::cout << "\n";

	// Manny then walks 

	// Manny then GET INPUT...

	// Okay so basically I want this to be a story break, its gonna be mad libs style
	// I want things like the story going through then the input to try and be based on the input given lol. we'll see how she werks.


	return;

}



//

// if no
	// print end sequence, 

// if yes



// 

int storyline1::executeIntroCommands()
{

	// input: y/n

	int i = 0;

	std::string nextline = getNextInput();

	if (nextline.find("y") != std::string::npos || nextline.find("Y") != std::string::npos)
	{

		// Execute up function. Used to switch the "gameline" to 0

		i = 1;

	}
	else if (nextline.find("n") != std::string::npos || nextline.find("N") != std::string::npos)
	{



	}
	else
	{



	}

	return 0;

}

// * Start Story

int storyline1::startStoryline1()
{

	printIntro();
	executeIntroCommands();

	return 0;

}
