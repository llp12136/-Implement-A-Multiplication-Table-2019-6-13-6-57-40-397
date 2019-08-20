// function divide (firstNumber, secondNumber) {
//     //return left + right;
//     const mul=0;
//     for(i=firstNumber;i<=secondNumber;i++)
//     {
//         for (j=i;j<=secondNumber;j++)
//         {
//             var b=i*j;
//             document.write(i+"×"+j+"="+b+" "+" ");
//     }
    
//         }
// }

// module.exports = divide;

function multplay(first,second)
{
var valid= isValid(first,second);
if (valid)
{
return valid 
}
var multipaly=genertMultiApply(first,second);
var output=printMultipaly(multipaly);

}
function isValid(first,second)
{
return first<second;
}
function genertMultiApply(first,second)
{
var genertedArray= [];
for(i=first;i<=second;i++)
    {
        for (j=first;j<=i;j++)
         {
             var b=j+"*"+i+"="+i*j;
             //document.write(i+"*"+j+"="+i*j+");
             genertedArray.push(b);
         }
     }
     return genertedArray;
}
function printMultipaly(multipaly)
{
    var temp =multipaly[0]+'\n'+multipaly[1]+' '+multipaly[2];
return temp;
}
module.exports = {isValid,
    genertMultiApply,
    printMultipaly}
     ;