#pragma once

#include "pch.h"
#include <iostream>
#include <string>
#include "Windows.h"
#include "mannysWeek.h"
#include "storyline1.h"

std::string getNextInput();

void PlayWavFile(LPCWSTR filename, bool complete);
