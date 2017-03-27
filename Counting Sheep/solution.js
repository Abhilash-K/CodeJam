/**
 * Created by Abhilash K on 3/26/2017.
 */

function findSolution (inputArray)
{
    var numtestCases = Number(inputArray[0]);
    var solutionString = "";
    var N = [];
    var checkString = [];
    var asleep = false;
    var currentWorkingNum = 0;
    var numSplitArray = [];
    var multiplicationFactor = 0;
    for(var i=1;i<=numtestCases;i++)
    {
        N[i - 1] = Number(inputArray[i]);
    }

    for(var j=0; j<N.length;j++)
    {
        solutionString += "Case #" + String(j +1) + ": ";
        checkString = [0,1,2,3,4,5,6,7,8,9];
        currentWorkingNum = N[j];
        multiplicationFactor = 0;
        asleep = false;
        while (!asleep)
        {
            if(N[j] == 0)
            {
                solutionString += "INSOMNIA";
                break;
            }
            numSplitArray = (""+currentWorkingNum).split("");
            for(var l=0;l<numSplitArray.length;l++)
            {
                checkString[Number(numSplitArray[l])] = -1;
            }
            for(var k=0;k<=checkString.length;k++)
            {
                if(k == 10)
                {
                    solutionString += String(currentWorkingNum);
                    asleep = true;
                }
                else if(checkString[k] != -1)
                {
                    break;
                }
            }
            multiplicationFactor = (currentWorkingNum / N[j]);
            multiplicationFactor++;
            currentWorkingNum = N[j]+multiplicationFactor;
        }

        if((j+1) != N.length)
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