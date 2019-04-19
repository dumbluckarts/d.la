#pragma once

#include <chrono>


class mannysWeek
{

public:
	void printIntro();
	int executeIntroCommands();
	int screenOne();
	int screenTwo();
	int selectStoryLine();
	int endSequence();

private:
	char story;

	std::string getRandomWrongAnswerText();

	void printScreen1Scene1();
	int executeScreenOne();

	void printScreen2Scene1();
	int getStorylineDecision();

	void printEndSequence1();
	int executeEndSequence();
	void printEndSequence2();

};