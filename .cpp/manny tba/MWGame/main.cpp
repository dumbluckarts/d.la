#include "pch.h"
#include "main.h"

mannysWeek mw1; // or "modern warfare 1," the name of this game.

std::string getNextInput()
{

	std::string str = "";

	std::getline(std::cin, str);

	return str;

}

void PlayWavFile(LPCWSTR filename, bool complete)
{

	/*
	SND_SYNC will not return until the sound completes.
	SND_ASYNC will return immediately and play the sound
	in the background.
	*/

	PlaySound(filename, NULL, SND_FILENAME | (complete ? SND_SYNC : SND_ASYNC));

}

int main()
{

	// I only want this to show once.

	do
	{

		mw1.printIntro();
		mw1.executeIntroCommands();
		mw1.screenOne();
		mw1.screenTwo();
		mw1.selectStoryLine();
		mw1.endSequence();

	} while (false);

	return 0;

}