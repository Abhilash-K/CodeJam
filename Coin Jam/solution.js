/**
 * Created by Abhilash K on 3/26/2017.
 */

function findSolution(inputArray)
{
    var numtestCases = inputArray[0];
    var T = [];
    var splitT = [];
    var numDigits = [];
    var currentRequiredDigits = 0;
    var numTestCases = [];
    var currentTestCases = 0;
    var solutionString = "";
    var isPrime = true;
    var isJamCoin = false;
    var checkedNumLim = 2;
    var checkedNumLimParsed = 2;
    var currentBinary = "";
    var baseMultiplier = 1;

    for(var i=1;i<=numtestCases;i++)
    {
        T[i-1] = inputArray[i];
        splitT = String(inputArray[i]).split(" ");
        numDigits[i-1] = splitT[0];
        numTestCases[i-1] = splitT[1];
    }

    for(var j=0; j<T.length;j++)
    {
        solutionString += "Case #" + String(j +1) + ":\n";
        currentRequiredDigits = numDigits[i];
        currentTestCases = numTestCases[i];
        for(var k=0;k<currentTestCases;k++)
        {
            isJamCoin = false;
            checkedNumLim = 2;
            while (!isJamCoin)
            {
                isPrime = true;
                while (isPrime)
                {
                    checkedNumLim++;
                    for (var l = 2; l <= checkedNumLim / 2; l++)
                    {
                        if (checkedNumLim % i == 0)
                        {
                            isPrime = false;
                            break;
                        }
                    }
                }
                checkedNumLimParsed = parseInt(checkedNumLim);
                currentBinary = checkedNumLim.toString(2);
                if(currentBinary[0] != "1")
                {
                    continue;
                }
                if(currentBinary[(currentBinary.length - 1)] != "1")
                {
                    continue;
                }
                for(var m = 3; m <= 10; m++)
                {
                    baseMultiplier = 1;
                    while()
                    {

                    }
                }
            }

        }
        if((j+1) != T.length)
        {
            solutionString += "\n";
        }
    }
    return solutionString;
}

function findSolutionOld(inputArray)
{
    var numtestCases = inputArray[0];
    var numCount = [];
    var numSymbols = [];
    var splitLineArray = [];
    var solutionString = "";
    for(var i=1;i<=numtestCases;i++)
    {
        splitLineArray = (inputArray[i]).split(' ');
        numCount[i-1] = splitLineArray[0];
        numSymbols[i-1] = splitLineArray[1];
    }

    for(var j=0; j<numCount.length;j++)
    {
        solutionString += "Case #" + String(j +1) + ": ";
        for(var k=0;k<Number(numCount[j]);k++)
        {
            solutionString += String(numSymbols[j]);
        }
        if((j+1) != numCount.length)
        {
            solutionString += "\n";
        }
    }

    return solutionString;
}