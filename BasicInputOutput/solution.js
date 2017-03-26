/**
 * Created by Abhilash K on 3/26/2017.
 */

function findSolution(inputArray)
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