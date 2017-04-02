/**
 * Created by Abhilash K on 3/26/2017.
 */

function findSolution(inputArray)
{
    var numtestCases = inputArray[0];
    var solutionString = "";
    var T = [];
    var splitT = [];
    var numDigits = [];
    var numTestCases = [];


    for(var i=1;i<=numtestCases;i++)
    {
        T[i-1] = inputArray[i];
        splitT = String(inputArray[i]).split(" ");
        numDigits[i-1] = splitT[0];
        numTestCases[i-1] = splitT[1];
    }

    return solutionString;
}

function findSolutionOldlogic(inputArray)
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
    var currentMultiplier = 1;
    var sumOfBinary = 0;
    var falsePositive = true;
    var listOfDivisors = [];
    var currentDivisor = 0;

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
        currentRequiredDigits = Number(numDigits[j]);
        currentTestCases = Number(numTestCases[j]);
        checkedNumLim = 2;
        for(var k=0;k<currentTestCases;k++)
        {
            isJamCoin = false;
            while (!isJamCoin)
            {
                listOfDivisors = [];
                isPrime = true;
                while (isPrime)
                {
                    checkedNumLim++;
                    currentDivisor = 0;
                    for (var l = 2; l <= checkedNumLim / 2; l++)
                    {
                        if (checkedNumLim % l == 0)
                        {
                            isPrime = false;
                            if(currentDivisor == 0)
                            {
                                currentDivisor = l;
                            }
                            break;
                        }
                    }
                }
                listOfDivisors.push(currentDivisor);
                checkedNumLimParsed = parseInt(checkedNumLim);
                currentBinary = checkedNumLim.toString(2);
                if(currentBinary.length > currentRequiredDigits)
                {
                    return "0";
                }
                if(currentBinary.length != currentRequiredDigits)
                {
                    continue;
                }
                if(currentBinary[0] != "1")
                {
                    continue;
                }
                if(currentBinary[(currentBinary.length - 1)] != "1")
                {
                    continue;
                }
                for (var m = 3; m <= 10; m++)
                {
                    falsePositive = true;
                    sumOfBinary = 0;
                    for (var n = 0; n < currentBinary.length; n++)
                    {
                        currentMultiplier = Math.pow(m, n);
                        sumOfBinary += currentBinary[n] * currentMultiplier;
                    }
                    currentDivisor = 0;
                    for (var p = 2; p <= Math.sqrt(sumOfBinary); p++)
                    {
                        if (sumOfBinary % p == 0)
                        {
                            falsePositive = false;
                            if(currentDivisor == 0)
                            {
                                currentDivisor = p;
                            }
                            break;
                        }
                    }
                    listOfDivisors.push(currentDivisor);
                    if(falsePositive == true)
                    {
                        break;
                    }
                    /*if(currentDivisor == 0)
                    {
                        console.log("error");
                        for (var p = 2; p <= Math.sqrt(sumOfBinary); p++)
                        {
                            if (sumOfBinary % p == 0)
                            {
                                falsePositive = false;
                                if(currentDivisor == 0)
                                {
                                    currentDivisor = p;
                                }
                                break;
                            }
                        }
                    }*/
                }
                if(falsePositive == false)
                {
                    solutionString += currentBinary + " " + checkedNumLim;
                    for(var o = 0; o<listOfDivisors.length;o++)
                    {
                        solutionString += " " + listOfDivisors[o];
                    }
                    if(k+1 != currentTestCases)
                    {
                        solutionString += "\n";
                    }

                    isJamCoin = true;
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