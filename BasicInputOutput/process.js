/**
 * Created by Abhilash K on 3/18/2017.
 */
function takeRawinput(text)
{
    var splitArray = [];
    splitArray = text.split('\n');
    var outputField = document.getElementById("OutputText");
    outputField.value = "";
    for(var i=0;i<splitArray.length;i++)
    {
        /*if(outputField.textContent == "")
        {
            outputField.textContent += splitArray[i];
        }
        else
        {
            outputField.textContent += '\n' + splitArray[i];
        }*/
        outputField.value += splitArray[i];
        outputField.value += '\n';
    }
    outputField.value += "done";
    alert(outputField.textContent);
}