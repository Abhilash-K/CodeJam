/**
 * Created by Abhilash K on 3/26/2017.
 */

function findSolution(inputArray)
{
    var numtestCases = inputArray[0];
    var S = [];
    var numtries = 0;
    var happy = false;
    var currentString = "";
    var solutionString = "";

    for(var i=1;i<=numtestCases;i++)
    {
        S[i-1] = inputArray[i];
    }
    for(var j=0; j<S.length;j++)
    {
        solutionString += "Case #" + String(j +1) + ": ";
        numtries = 0;
        happy = false;
        currentString = S[j];
        stringArray = [];
        while(!happy)
        {
            for(var k=0;k<=currentString.length;k++)
            {
                if(k == currentString.length)
                {
                    solutionString += String(numtries);
                    happy = true;
                }
                else if(currentString[k] == "-")
                {
                    numtries++;
                    break;
                }
            }
            stringArray = currentString.split("");
            for(var l=0;l<String(currentString).length;l++)
            {
                if(stringArray[l] == "+")
                {
                    stringArray[l] = "-";
                }
                else
                {
                    stringArray[l] = "+";
                }
                currentString = "";
                for(var m=0;m<stringArray.length;m++)
                {
                    currentString += String(stringArray[m]);
                }
                if(stringArray[l+1])
                {
                    if(stringArray[l] == stringArray[l+1])
                    {
                        break;
                    }
                }
            }

        }

        if((j+1) != S.length)
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