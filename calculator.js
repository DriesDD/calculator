let number1, number2, result;

function update() {
number1 = Number(document.getElementById('number1').value);
number2 = Number(document.getElementById('number2').value);
if (document.getElementById('operator').value == '+')
{ result =  number1 + number2 }
else if (document.getElementById('operator').value == '-')
{ result =  number1 - number2 }
else if (document.getElementById('operator').value == '*')
{ result =  number1 * number2 }
else if (document.getElementById('operator').value == '/')
{ result =  number1 / number2 };
if ( (result == 'Infinity') || (result == '-Infinity') || (result ==  'NaN') )
{ result = 'n/a' };
};

function show() 
{
    document.getElementById('result').value = result;
};
    
