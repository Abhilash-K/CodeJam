/**
 * Created by Abhilash K on 3/18/2017.
 */
function takeRawinput(text)
{
    var splitArray = [];
    splitArray = text.split('\n');
    var outputField = document.getElementById("OutputText");
    var outputTextString = "";
    for(var i=0;i<splitArray.length;i++)
    {
        if(outputTextString == "")
        {
            outputTextString += splitArray[i];
        }
        else
        {
            outputTextString += '\n' + splitArray[i];
        }
    }
    outputField.value = outputTextString;
    outputField.setAttribute("height", "100px");
}